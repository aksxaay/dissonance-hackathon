from fileinput import filename
from flask import Flask,request,jsonify
import easyocr
from pathlib import Path
import pytesseract
import os
from pdf2image import convert_from_path
import cv2
import pandas as pd
from flask_jsonpify import jsonpify
import json

app = Flask(__name__)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
def imageToTable(filename):
    # Load image, grayscale, and Otsu's threshold
    image = cv2.imread(filename)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
    # Remove horizontal lines
    horizontal_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (50,1))
    detect_horizontal = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, horizontal_kernel, iterations=2)
    cnts = cv2.findContours(detect_horizontal, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    for c in cnts:
        cv2.drawContours(thresh, [c], -1, (0,0,0), 2)

    # Remove vertical lines
    vertical_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1,15))
    detect_vertical = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, vertical_kernel, iterations=2)
    cnts = cv2.findContours(detect_vertical, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    for c in cnts:
        cv2.drawContours(thresh, [c], -1, (0,0,0), 3)

    # Dilate to connect text and remove dots
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (10,1))
    dilate = cv2.dilate(thresh, kernel, iterations=2)
    cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    for c in cnts:
        area = cv2.contourArea(c)
        if area < 500:
            cv2.drawContours(dilate, [c], -1, (0,0,0), -1)

    # Bitwise-and to reconstruct image
    result = cv2.bitwise_and(image, image, mask=dilate)
    result[dilate==0] = (255,255,255)

    # OCR
    data = pytesseract.image_to_string(result, lang='eng',config='--psm 6')
    return data

def imageToText(imagename):
    print(imagename)
    reader = easyocr.Reader(['en']) 
    res = reader.readtext(f'{imagename}',detail=0,paragraph=True)   
    return(res)

def csvToText(csvfilename):
    print(type(csvfilename))
    df = pd.read_csv(csvfilename, error_bad_lines=False,encoding= 'unicode_escape')
    JSONP_data = jsonpify(df)
    return JSONP_data
    # return df
   


def pdfToImage(pdf_name):
    name=""
    images = convert_from_path(pdf_name)
    for i in range(len(images)):
        images[i].save('page'+ str(i) +'.jpg')
        name=(f'page{i}.jpg')
    return imageToText(name)
@app.route('/imageTotext', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      file = request.files['file']
      file.save(file.filename)
      split_tup = os.path.splitext(file.filename)
      file_name = split_tup[0]
      file_extension = split_tup[1]
      if(file_extension=='.jpg'or file_extension=='.png'):
        return imageToText(file.filename)
      if(file_extension=='.pdf'):
        return pdfToImage(file.filename)
      if(file_extension=='.csv'):
       result = list()
       df=pd.read_csv(file.filename)
       for index, row in df.iterrows():
        result.append(dict(row))
        return jsonify(result)
        
if __name__=="__main__":
    app.run(debug=True)


