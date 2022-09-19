import { Modal } from 'antd';
import { useState } from 'react'
import axios from 'axios';
import Apicall from './Apicall';
import './modal.css'
const Modalcard = ({ isModalOpen, onClickBtnHandler }) => {
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
            .then(response => setalltext(response.data), )
            .catch(console.log("Error"))
    }
  const handleOk = () => {
    onClickBtnHandler(false);
  };

  const handleCancel = () => {
    onClickBtnHandler(false);
  };
  return (
    <>
      <Modal title="Document To Word" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  <Apicall/>
  </Modal>
    </>
  );
};
export default Modalcard;