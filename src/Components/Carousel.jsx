import { Carousel } from 'react-bootstrap';
import Slider1 from '../img/slider1.jpg';
import Slider2 from '../img/slider2.jpg';
import Slider3 from '../img/slider3.jpg';

export default function Carosel() {
  return (
  <>
  
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slider1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Slider2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  </>
    
  )
}
