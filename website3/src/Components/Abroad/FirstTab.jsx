import React from 'react'
import './FirstTab.css'

const FirstTab = () => {
    
  return (
    <div>
      <div className="container-tab-uk">
        <h3><b>Education in UK</b></h3>
        <ul className='check-circle'>
            <li>World Class Education</li>
            <li>There are 10 UK universities in the top 100 world-ranking universities list</li>
            <li>In UK there are 23 Business schools with Triple Accreditation</li>
            <li>2 Years Work Visa-Graduate Route Visa</li>
            <li>20 Hours / week -Part time Jobs for International Students</li>
            <li>Degree is recognized by Worldwide</li>
            <li>UK offers 1 year Masters Degree</li>
        </ul>
      </div>
      <br />
      <div>
        <h3><b>Cost of Education in UK</b></h3>
        <ul>
            <li>Tuition Fee range between £10,000 - £26,000.</li>
            <li>Monthly living cost range between £600 – £1,300 a month to cover accommodation, bills, food and other living costs.</li>
            <li>Costs can differ substantially depending on where you live in the UK and how much you want to spend.</li>
        </ul>
      </div>
      <div className="btn">
        <button>Free Counselling</button>
      </div>
    </div>
  )
}

export default FirstTab
