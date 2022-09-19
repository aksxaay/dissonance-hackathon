import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
const Apicall = () => {
    const [selectedFile, setselectedFile] = useState(null)
    const [alltext, setalltext] = useState();
    const [showedit, setshowedit] = useState(false);
    const [showloader, setshowloader] = useState();
    const [isLoading, setLoaded]=useState(false);

    const onFileChange = event => {

        setselectedFile(event.target.files[0]);

    };
    const onFileUpload = () => {

        setLoaded(true)

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        axios.post("http://localhost:5000/imageTotext", formData)
            .then(response => setalltext(response.data), setLoaded(false))
            .catch((err) => console.log(err))


    }
    const TextFile = () => {
        const element = document.createElement("a");
        const file = new Blob(alltext);
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        // alert('saved successfully')
    }
    return (
        <div>
            <div>
                <input type="file" onChange={onFileChange} />
                {/* <button onClick={onFileUpload}>
                    Upload!
                </button> */}
                <button onClick={onFileUpload} className="px-4 lg:px-10 py-2 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out animate-bounce">
                    Upload
                </button>
            </div>
            {alltext && <p>{alltext}</p>}
            {alltext && <button onClick={(e) => setshowedit(true)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Edit
            </button>}
            {showedit && <div>
                <textarea style={{ width: '100%', height: "20rem" }} type='text'
                    // onChange={() => { this._handleChangeEvent(this.state.data); }}
                    defaultValue={alltext} />
                <button onClick={TextFile} className="px-4 lg:px-10 py-2 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out animate-bounce">
                    Save
                </button>
            </div>}
            {isLoading?(
                <Loader/>
            ) : <div></div>}
        </div>
    )
}

export default Apicall




