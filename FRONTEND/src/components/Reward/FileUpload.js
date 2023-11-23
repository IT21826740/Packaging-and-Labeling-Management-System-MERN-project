
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "../../Styles/Uploader.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check if the selected file is an Excel file
      if (
        selectedFile.name.endsWith(".xlsx") ||
        selectedFile.name.endsWith(".xls")
      ) {
        setFile(selectedFile);
        setFileName(selectedFile.name);
      } else {
        alert("Please select a valid Excel file (.xlsx or .xls)");
      }
    }
  };

  const handleDelete = () => {
    setFile(null);
    setFileName("No selected File");
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send the file to the backend for storage
      await axios.post("http://localhost:5000/file/upload", formData);

      // File uploaded successfully
      alert("File uploaded successfully");
      setFile(null);
      setFileName("No selected File");
    } catch (error) {
      // Handle error
      alert("File upload failed");
      console.error("File upload error:", error);
    }
  };

  // Fetch files from your API endpoint
  useEffect(() => {
    axios.get("http://localhost:5000/file/files") // Replace with your backend API URL
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
        alert('Error fetching files. Please try again later.');
      });
  }, []);

  return (
    <div className="uploader-body">
      <main >
        <form 
          className="fileForm"
          action=""
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            accept=".xlsx, .xls"
            className="input-field"
            hidden
            onChange={handleFileChange}
          />

          {file ? (
            <div>
              <AiFillFileImage color="#1475cf" />
              <span className="upload-content">
                {fileName} -
                <MdDelete onClick={handleDelete} />
              </span>
            </div>
          ) : (
            <>
              <MdCloudUpload color="#1475cf" size={60} />
              <p>Browse Excel Files to upload</p>
            </>
          )}
        </form>
        <br/>
        <button className="bttn" onClick={handleUpload}>Submit</button>
      </main>
      <br/>
      <br/>
      <h5 style={{marginLeft:"50px"}}><b> CHECK PAST RECORD ABOUT COMPETITOR</b></h5>
      <br/>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            <a href={file.filePath} target="_blank" rel="noopener noreferrer">
              {file.filename}
            </a>
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default FileUpload;
