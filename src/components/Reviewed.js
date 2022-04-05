import React from "react";
import "./Reviewed.css";

function Reviewed() {
  return (
    <div className="main-div">
      <div className="sub-div">
        <h2>Questions</h2>
        <ul className="UL-tag">
          <label for="fname">
            <strong>Sample Question</strong>
          </label>
          <br />
          <input type="text" id="fname" name="fname" placeholder="Your Answer" />
          <br />
          <div className="alert alert-success">
          <strong>Success!</strong> Indicates a successful or positive action.
          </div>

          <label for="fname">
            <strong>Sample Question</strong>
          </label>
          <br />
          <input type="text" id="fname" name="fname" placeholder="Your Answer" />
          <br />
          <div className="alert alert-danger">
          <strong>Failure!</strong> Indicates a failed response.
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Reviewed;
