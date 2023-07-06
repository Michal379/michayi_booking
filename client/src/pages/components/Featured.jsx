import React from 'react'


const Featured = () => {
    return (
        <div className='featured'>          
          <div className="featuredItem">
            <div className="imageContainer">
              <img src="https://i.pinimg.com/236x/14/8d/fe/148dfe4bdee9962f3f56e3884cffcba5.jpg" alt="Amazing Calgary" />
              <div className='featuredTitles'>
                <h3>Amazing Calgary</h3>
                <h4>Canada Southern Street 00100</h4>
                <h4>1300$</h4>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <div className="imageContainer">
              <img src="https://i.pinimg.com/236x/34/1d/f7/341df7753f6fe211389896e0c5e614b8.jpg" alt="Giraffe Manor Hotel" />
              <div className='featuredTitles'>
                <h3>The Silo Hotel</h3>
                <h4>CapeTown</h4>
                <h4>1700$</h4>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <div className="imageContainer">
              <img src="https://i.pinimg.com/236x/21/4a/fa/214afabe0eca3cd35b0e6f804253b850.jpg" alt="Captivating Calvaries" />
              <div className='featuredTitles'>
                <h3>Captivating Calvaries</h3>
                <h4>Nairobi, Kenya 4567</h4>
                <h4>1500$</h4>
              </div>
            </div>
          </div>         
          <div className="featuredItem">
            <div className="imageContainer">
              <img src="https://i.pinimg.com/236x/6f/68/c5/6f68c58153cd6314088ea353c4d7faea.jpg" alt="Captivating Calvaries" />
              <div className='featuredTitles'>
                <h3>Captivating Calvaries</h3>
                <h4>Nairobi, Kenya 4567</h4>
                <h4>1500$</h4>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Featured