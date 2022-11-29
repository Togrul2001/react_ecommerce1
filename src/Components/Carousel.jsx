import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import './carousel.css'


const imgs = [
  {
    url:'tshirt1.jfif'
  },
  {
    url:'tshirt2.jfif'
  },
  {
    url:'tshirt3.jpg'
  },
  {
    url:'tshirt4.png'
  },
  {
    url:'tshirt5.webp'
  },
  {
    url:'tshirt6.jfif'
  },
  {
    url:'tshirt8.jpg'
  },
  

]

function IndividualIntervalsExample({products}) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 4,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    
    return (
      <Slider {...settings}>
          
            {
              products.map(product => <div key={product.id}><img src={require(`../Assets/Images/${product.img}`)} alt="" width={300} height={300} /></div>)
            }
          
        </Slider>
    )
  

    // return (
    //   <Carousel variant="dark" interval={3000}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require('../Assets/Images/tshirt1.jfif')}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require('../Assets/Images/tshirt1.jfif')}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require('../Assets/Images/tshirt1.jfif')}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // <>
      
    // </>
    
    // );
  }
  
  export default IndividualIntervalsExample;