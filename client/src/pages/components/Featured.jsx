import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Featured = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <div
        key={i}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i === 0 ? 'white' : 'gray',
          }}
        />
      );
    },
    dotsClass: 'slick-dots',
    className: 'slider',
    lazyLoad: 'ondemand',
  };

  return (
    <div>
      <div className="slider-container" style={{ height: '450px' }}>
        <Slider {...settings}>
          <div>
            <img
              src="https://static.wixstatic.com/media/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1905,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg"
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/4a7193_3d46254f0abd4093a0a93f8d6567d090~mv2.jpg/v1/fill/w_1251,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Enrogue%20Interior_CGI%20%20(3b).jpg"
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />            
             </div>
          </Slider>
      </div>

      <div className='content-container'>
        <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Properties</h4>
        <h2 style={{ textAlign: 'center' }}>Display Latest & Featured Properties</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        Embark on an exciting adventure towards finding your dream home by exploring our extensive range of meticulously curated properties. With a wide selection of exceptional homes showcased on our platform, you have the freedom to choose the perfect residence that aligns with your unique preferences and requirements. Whether you seek a cozy apartment nestled in a bustling city center or a luxurious villa overlooking breathtaking landscapes, we are dedicated to helping you discover the house of your dreams. Take the first step towards creating a lifetime of cherished memories by selecting your dream home from our carefully curated collection of posted properties.
        </p>
      </div>
    </div>
  );
};

export default Featured

    // return (
    //     <div>
    //         <div className="slider-container"> 
    //           <Slider {...settings } >                       </Slider>


    //             <div>      

    //           <img src="https://i.pinimg.com/236x/14/8d/fe/148dfe4bdee9962f3f56e3884cffcba5.jpg" 
    //              alt="slide 2" 
    //                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}              
    //           />              
    //           {/* <div className='featuredTitles'>
    //             <h3>Amazing Calgary</h3>
    //             <h4>Canada Southern Street 00100</h4>
    //             <h4>1300$</h4>
    //           </div> */}
    //                  </div>
    //                     </div>          

    //           <img src="https://i.pinimg.com/236x/34/1d/f7/341df7753f6fe211389896e0c5e614b8.jpg" 
    //              alt="slide 3" 
    //                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
    //           />
    //           {/* <div className='featuredTitles'>
    //             <h3>The Silo Hotel</h3>
    //             <h4>CapeTown</h4>
    //             <h4>1700$</h4>
    //           </div> */}

    //       <div className="featuredItem">
    //         <div className="imageContainer">
    //           <img src="https://i.pinimg.com/236x/21/4a/fa/214afabe0eca3cd35b0e6f804253b850.jpg" 
    //              alt="slide 4" 
    //                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
    //           />
    //           {/* <div className='featuredTitles'>
    //             <h3>Captivating Calvaries</h3>
    //             <h4>Nairobi, Kenya 4567</h4>
    //             <h4>1500$</h4>
    //           </div> */}
    //         </div>
    //       </div>         
    //           <img src="https://i.pinimg.com/236x/6f/68/c5/6f68c58153cd6314088ea353c4d7faea.jpg"
    //             alt="slide 5" 
    //              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
    //           />
    //           {/* <div className='featuredTitles'>
    //             <h3>Captivating Calvaries</h3>
    //             <h4>Nairobi, Kenya 4567</h4>
    //             <h4>1500$</h4>
    //           </div> */}

    //     </div>
    //   );
   