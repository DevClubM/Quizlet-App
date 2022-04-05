import React from 'react'

function UnderReview() {
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
          <div className="alert alert-info">
          <strong>Under Review</strong>
          </div>

          
        </ul>
      </div>
    </div>
  )
}

export default UnderReview