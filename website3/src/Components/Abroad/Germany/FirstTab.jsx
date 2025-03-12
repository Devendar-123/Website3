import React from 'react'
import './FirstTab.css'

const FirstTab = () => {
    
  return (
    <div>
      <div className="container-tab-uk">
        <h3><b>Education in UK</b></h3>
        <ul className='check-circle'>
            <li>World Class Education</li>
            <li>Some facts about Germany:</li>
            <li>Germany offers lot of benefits to Indian students as German universities are globally recognized and valued for their top-class quality</li>
            <li>High Living Standards</li>
            <li>Lowest Tuition Fees.</li>
            <li>Excellent Employment Opportunities</li>
            <li>Test Required – GRE and IELTS along with German – Level A2</li>
        </ul>
      </div>
      <br />
      <div>
        <h3><b>Cost of Education in Germany</b></h3>
        <ul>
            <li>The Living Cost in Germany will range from 8000 euro to 10000 euro per year</li>
            <li>There is no tuition fee in public universities or affordable fees for tuition. For applying these universities, students should have an excellence profile (in terms of academic and other language test scores)</li>
            <li>Average tuition fee ranges between 10,000 Euros to 20,000 Euros per year.</li>
        </ul>
      </div>
      <div className="btn">
        <button>Free Counselling</button>
      </div>
    </div>
  )
}

export default FirstTab
