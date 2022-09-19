import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Apicall = () => {
    const [selectedFile, setselectedFile] = useState(null)
    const [alltext,setalltext]=useState();

    const onFileChange = event => {

        // Update the state
        setselectedFile(event.target.files[0]);

    };
    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        axios.post("http://localhost:5000/imageTotext", formData)
            .then(response => setalltext(response.data));


    }
    return (
        <div>
            <h1>
                GeeksforGeeks
            </h1>
            <h3>
                File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {alltext&& <p>{alltext}</p>}
        </div>
    )
}

export default Apicall