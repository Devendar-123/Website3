import React from 'react'
import './FirstTab.css'

const FirstTab = () => {
    
  return (
    <div>
      <div className="container-tab-uk">
        <h3><b>Education in New zealand</b></h3>
        <ul className='check-circle'>
            <li>New Zealand is an emerging top destination for studying abroad.</li>
            <li>New Zealand focuses on research-based teaching, which means you will learn dealing with situations in a systematic and an organised manner.</li>
            <li>The country boasts of highly experienced faculty, well-equipped laboratories, access to latest technology, equipments, and opportunities.</li>
            <li>New Zealand ranks second on the Global Peace Index 2018</li>
            <li>New Zealand offers a wonderful multi-cultural environment that exists in perfect harmony with the country’s outdoorsy lifestyle.</li>
            <li>As an international student in New Zealand, you can work for up to 20 hours every week during your semesters and full-time during breaks.</li>
            </ul>
      </div>
      <br />
      <div>
        <h3><b>Cost of Education in New Zealand</b></h3>
        <ul>
            <li>The annual average cost of living in Italy for an international student is around NZ$17,500 approx.</li>
            <li>The average tuition fees in private universities range between 20,000 – 40,000 NZ$/year.</li>
        </ul>
      </div>
      <div className="btn">
        <button>Free Counselling</button>
      </div>
    </div>
  )
}

export default FirstTab
