import WSPGallery from './WSPGallery';
import image1 from '../../assets/CSS.PNG';
import image2 from '../../assets/HTML.PNG';
import image3 from '../../assets/WEBDEV.PNG';
import image4 from '../../assets/JAVASCRIPT.PNG';
import image5 from '../../assets/WEBDESIGN.PNG';
import image6 from '../../assets/JQUERY.PNG';


function Gallery() {

  const galleryImages = [
    {
      img: image1,
    },
    {
      img: image2
    },
    {
      img: image3
    },
    {
      img: image4
    },
    {
      img: image5
    },
    {
      img: image6
    },
  ]

  return (
    <div className="App">
      <br />
      <div>
        <h2 className='section__title'>Certificates</h2>
        <span className="section__subtitle">証明書(コース完了)</span>

      </div>

      <WSPGallery
        galleryImages={galleryImages}
      />
    </div>
  );
}

export default Gallery;