import React from 'react'
import './Summary.scss'

const Summary = ({navigate}) => {
  return (
    <section className='summary'>
        <div className="title">
        <h1> Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summaryContainer">
        <div className="topLayer">
            <div className="left">
                <h3>Arcade (<span>Yearly</span>)</h3>
                <button onClick={() => navigate('/plan')}>Change</button>
            </div>

            <div className="right">
                <p>$90/yr</p>
            </div>
        </div>

        <ul>
            <li>
                <p>Online Service</p>
                <span>+$10/yr</span>
            </li>

            <li>
                <p>Larger Storage</p>
                <span>+$20/yr</span>
            </li>
        </ul>
      </div>

      <div className="priceSummary">
        <p>Total (<span>per year</span>)</p>
        <span className='totalSum'>$120/yr</span>
      </div>

      <div className="buttonWrapper">
        <button className="secondaryBtn" onClick={() => navigate("/add-ons")}>
          Go Back
        </button>
        <button className="primaryBtn">Confirm</button>
      </div>

    </section>
  )
}

export default Summary