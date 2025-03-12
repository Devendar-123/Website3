import React from 'react'
import './Gallery.css'
const Gallery = () => {
  return (
    <div>
      <div className="gallery-container">
        <div className="first-row">
            <div className="img">
                <img src="/Images/p1.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p2.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p3.jpg" alt="p" />
            </div>
        </div>
        <div className="second-row">
            <div className="img">
                <img src="/Images/p4.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p5.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p6.jpg" alt="p" />
            </div>
        </div>
        <div className="third-row">
            <div className="img">
                <img src="/Images/p7.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p8.jpg" alt="p" />
            </div>
            <div className="img">
                <img src="/Images/p9.jpg" alt="p" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
