import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframes';
import bg1 from './images/img1.webp'
import bg2 from './images/img2.webp'
import bg3 from './images/img3.jpg'
import bg4 from './images/img4.jpg'





function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1}/>
        <Carousel.Caption>
          <h3 >Kerala</h3>
          <p>God's Own Country</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Pictureframe imageUrl={bg2}/>
        
        <Carousel.Caption>
        <h3 >Kerala</h3>
        <p>God's Own Country</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Pictureframe imageUrl={bg3}/>
        
        <Carousel.Caption>
        <h3 >Kerala</h3>
        <p>God's Own Country</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Pictureframe imageUrl={bg4}/>
        
        <Carousel.Caption>
        <h3 >Kerala</h3>
        <p>God's Own Country</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;