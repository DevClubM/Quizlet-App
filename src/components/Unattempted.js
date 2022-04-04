import React from "react";
import "./Unattempted.css"

function Unattempted() {
  return (
    <div class="main-div">
      <div class="sub-div">
        <h2>Questions</h2>
        <ul>
          <li>
            <input type="radio" name="answer" id="ans1" className="answer" />
            <label for="ans1" id="option1">
              Answer Option
            </label>
          </li>
          <li>
            <input type="radio" name="answer" id="ans1" className="answer" />
            <label for="ans1" id="option1">
              Answer Option
            </label>
          </li>
          <li>
            <input type="radio" name="answer" id="ans1" className="answer" />
            <label for="ans1" id="option1">
              Answer Option
            </label>
          </li>
        </ul>
        <h2>Questions</h2>
        <ul>
          <li>
            <input type="radio" name="answer2" id="ans1" className="answer" />
            <label for="ans2" id="option1">
              Answer Option
            </label>
          </li>
          <li>
            <input type="radio" name="answer2" id="ans1" className="answer" />
            <label for="ans2" id="option1">
              Answer Option
            </label>
          </li>
          <li>
            <input type="radio" name="answer2" id="ans1" className="answer" />
            <label for="ans2" id="option1">
              Answer Option
            </label>
          </li>
        </ul>

      </div>
      <button className="button-57" role="button"><span class="text">Next</span><span>Done?</span></button>
    </div>
  );
}

export default Unattempted;
