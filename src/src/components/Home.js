import HomeNewsSlider from "./HomeNewsSlider";
import '../style/Home.css';

function Home() {
  return (
    <section id='home-page'>
      <p className='section-title'>EXPLORE THE MAGICAL WORLD OF LITERATURE</p>
      <p id='home-text'>We invite you to embark on a literary voyage with us at BookSphere. Whether you seek knowledge, adventure, or solace, you'll find it within the pages of our carefully selected books. Join our community, explore our shelves, and let the world of literature unfold before you.</p>      
      <div id='tags'>
        <div className='tag-div'>
          <img src='images/icons/icons8-delivery-gold.png'></img>
          <p>Fast delivery</p>
        </div>
        <div className='tag-div'>
          <img src='images/icons/icons8-price-gold.png'></img>
          <p>Low prices</p>
        </div>
        <div className='tag-div'>
          <img src='images/icons/icons8-card.png'></img>
          <p>Safe payment</p>
        </div>
      </div>  
      <div id='shop-button'>
        <a id='shop-link' href='#products-page'>Shop now &gt;</a>
      </div>
    </section>
  );
}

export default Home;