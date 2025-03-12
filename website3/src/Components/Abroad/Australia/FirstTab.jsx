import React from 'react'
import './FirstTab.css'

const FirstTab = () => {
    
  return (
    <div>
      <div className="container-tab-uk">
        <h3><b>Education in Australia</b></h3>
        <ul className='check-circle'>
            <li>World Class Education</li>
            <li>Australian Universities are committed in equipping students with practical skills and knowledge.</li>
            <li>Australian Universities consistently ranks among top 100 in the world universities in global rankings such as Times Higher Education, QS and Shangai Rankings.</li>
            <li>20 hours of part time job during semester and full-time job during semester breaks can be done.</li>
            <li>Many Australian degrees includes work experience programs and internships</li>
            <li>Australian Institutions offers a huge range of student support services to help them to settle into a new life in Australia.</li>
            <li>Australian cities have some of the lowest crime rates in the world.</li>
            <li>Australia is a friendly and welcoming country.</li>
            <li>One can stay up to 5 years depending on the course one has selected.</li>
        </ul>
      </div>
      <br />
      <div>
        <h3><b>Cost of Education in Australia</b></h3>
        <ul>
            <li>Average Tuition fee UG -15000 AUD to 33000 AUD PG – 20000 AUD to 37000 AUD</li>
            <li>Cost of Living 12 – Months living expenses for students 21,041 AUD</li>
        </ul>
      </div>
      <div className="btn">
        <button>Free Counselling</button>
      </div>
    </div>
  )
}

export default FirstTab
