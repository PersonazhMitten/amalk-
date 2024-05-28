import React from 'react';
import './about.css';

function About({ reference }) {
  return (
    <section id="about" className='about' ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>About</h1>
          <p className="aboutText">Welcome to Riddle-Forge, your ultimate destination for all things gaming! At Riddle-Forge, we believe that gaming is more than just a hobby—it's a passion, a community, and a lifestyle. We are committed to bringing you the best in gaming, from the latest releases to timeless classics, all in one convenient place.</p>
          <h4>What We Offer:</h4>
          <h5 className="aboutTitle"><b>Swipe Through the Best:</b></h5>
          <p className="aboutText">
            Our intuitive swiper feature allows you to effortlessly browse through our vast collection of games. Discover new favorites and revisit old ones with just a swipe.
          </p>
          <h5 className="aboutTitle"><b>Filter and Search:</b></h5>
          <p className="aboutText">
            Use our powerful filters and search tool to quickly locate the games that match your preferences. Sort by price, rating, discount, and more to find the perfect game for you.
          </p>
          <h5 className="aboutTitle"><b>Favorites and Cart:</b></h5>
          <p className="aboutText">
            Add games to your personal favorites list to keep track of the ones you love. Ready to buy? Simply add games to your cart for a seamless shopping experience.
          </p>
          <h5 className="aboutTitle"><b>Seamless Authentication:</b></h5>
          <p className="aboutText">
            Log in to your account to access personalized features and keep track of your purchases and favorite games. Our secure database ensures your information is always safe.
          </p>
          <h5 className="aboutTitle"><b>Connect with Us: </b></h5>
          <p className="aboutText">
            Stay connected with us through our social media links. Follow us for the latest updates, exclusive offers, and more.
          </p>
          <h2>Game Cards</h2>
          <p className="aboutText">
            Each game card on our site features detailed information, including price, rating, and special discounts. Whether you're looking for the best deals or the highest-rated titles, our game cards provide all the details you need to make an informed choice.
          </p>
        </div>
      </div>
      <h3 className="EndText">
        Thank you for visiting Riddle-Forge! We hope you enjoy your time here and find the perfect games to add to your collection. Happy gaming!
      </h3>
    </section>
  );
}

export default About;
