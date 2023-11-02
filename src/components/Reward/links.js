import React from "react";

function Links() {
  const googleSheetsLink = "https://docs.google.com/spreadsheets/d/1vfY_118iUAKXxt3qKppuF-Exr69kxDLwMLdMtXtrcf8/edit?resourcekey#gid=505319512";
  const googleFormsUrl = "https://docs.google.com/forms/d/13RdI2-iquQLxq0gj9FKGanyqh31BzmenhRrXAVJCrtA/edit?pli=1";

  return (
    <div>
      <p> Check Google Sheets : 
      <a href={googleSheetsLink} target="_blank" rel="noopener noreferrer">
        Open Google Sheets
      </a></p>
      <br/>
      <p>Manage Google Forms : 
      <a href={googleFormsUrl} target="_blank" rel="noopener noreferrer">
        Google Forms
      </a></p>
    </div>
  );
}

export default Links;
