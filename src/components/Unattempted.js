import React from "react";
import "./Unattempted.css";

function Unattempted() {
  return (
    <div class="main-div">
      <div class="sub-div">
        <h2>Questions</h2>
        <ul className="UL-tag">
          
          <label for="fname"><strong>Sample Question</strong></label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          
          </ul>

      </div>
      <button className="button-57" role="button"><span class="text">Next</span><span>Done?</span></button>
    </div>
  );
}

export default Unattempted;
