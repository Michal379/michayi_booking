import React from 'react';

const Featured = () => {
  return (
    <div className='featured' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="featuredItem">
        <div className="imageContainer">
          <img src="https://media.istockphoto.com/id/1023882592/photo/hotel-sign-on-marble-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=u4Rrz1JS0wL63FQ4O78_qtaREzarxdmWcMawawPnR6c=" alt="Amazing Calgary" />
          <div className='featuredTitles'>            
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
          <img src="https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=" alt="Captivating Calvaries" />
          <div className='featuredTitles'>
            <h3>Captivating Calvaries</h3>
            <h4>Nairobi, Kenya 4567</h4>
            <h4>1500$</h4>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="imageContainer">
          <img src="https://media.istockphoto.com/id/1390201340/photo/modern-luxury-villa-with-large-terrace-swimming-pool-sofa-and-lounge-chairs.jpg?s=612x612&w=0&k=20&c=8J2qSFoLSanqvRhXLuUoYzg1elAZks8VWSZBid5Sitg=" alt="Captivating Calvaries" />
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

export default Featured;











// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Featured = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     customPaging: function (i) {
//       return (
//         <div
//           style={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             background: i === 0 ? 'white' : 'gray',
//           }}
//         />
//       );
//     },
//     dotsClass: 'slick-dots',
//     className: 'slider',
//   };

//   return (
//     <div className='featured'>
//       <Slider {...settings}>
//         <div className="featuredItem">
//           <div className="imageContainer">
//             <img src="https://i.pinimg.com/236x/14/8d/fe/148dfe4bdee9962f3f56e3884cffcba5.jpg" alt="Amazing Calgary" />
//             <div className='featuredTitles'>
//               <h3>Amazing Calgary</h3>
//               <h4>Canada Southern Street 00100</h4>
//               <h4>1300$</h4>
//             </div>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <div className="imageContainer">
//             <img src="https://i.pinimg.com/236x/34/1d/f7/341df7753f6fe211389896e0c5e614b8.jpg" alt="Giraffe Manor Hotel" />
//             <div className='featuredTitles'>
//               <h3>The Silo Hotel</h3>
//               <h4>CapeTown</h4>
//               <h4>1700$</h4>
//             </div>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <div className="imageContainer">
//             <img src="https://i.pinimg.com/236x/21/4a/fa/214afabe0eca3cd35b0e6f804253b850.jpg" alt="Captivating Calvaries" />
//             <div className='featuredTitles'>
//               <h3>Captivating Calvaries</h3>
//               <h4>Nairobi, Kenya 4567</h4>
//               <h4>1500$</h4>
//             </div>
//           </div>
//         </div>
//         <div className="featuredItem">
//           <div className="imageContainer">
//             <img src="https://i.pinimg.com/236x/6f/68/c5/6f68c58153cd6314088ea353c4d7faea.jpg" alt="Captivating Calvaries" />
//             <div className='featuredTitles'>
//               <h3>Captivating Calvaries</h3>
//               <h4>Nairobi, Kenya 4567</h4>
//               <h4>1500$</h4>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Featured;
