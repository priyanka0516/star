import React,{useState} from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './responsive.css';
function Home(){
    const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

   const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 5000,
      smartSpeed: 450,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  };
    return(
        <>
        <div>
            <div className="banner-container">
		    <div className="banner-left">
			<h2 className="banner-header">Discover the perfect balance <br/> of hospitality, luxury and <br/>comfort.</h2>
			<p>We are focused on providing clients with the highest level<br/>of comfort and excellent affordable rates</p>
			<a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large">Book Now</a>
		</div>
		<div className="banner-right">
			<form action="" className="banner-form">
					<h3>Scared you can't afford it?</h3><br/>
					<p>Don't worry, our hotel offers the best<br/> affordable rates you can ever find.</p>			
					<input type="text" id="arrival" name="arrival_date" placeholder="Arrival Date"/><br/>		
					<input type="text" id="departure" name="departure_date" placeholder="Departure Date"/><br/>			
					<input type="text" id="guests" name="guests" placeholder="Guests"/><br/>
					<input type="text" id="children" name="children" placeholder="Children"/><br/>
					<button type="button" className="rates">CHECK RATES</button>
			</form>
		</div>
	</div>
    </div>
    	
        <div className="enjoy-container">
            <div className="enjoy-header">
                <h2 className="enjoy-heading">Enjoy your stay <br/>at our hotel</h2>
                <p>We are more than being a hotel because we are able<br/> to combine the quality standard of a hotel with the<br/> advantages of an apartment.</p>
            </div>
        <div className="enjoy-services">
            <div className="first-col">
                <div className="upper">
                            <img src={require('./images/clock.png')} alt="clock icon" className="enjoy__clock-icon"/>
                        <h3>24 hours Room Service</h3>
                        <p>You have access to 24-hours a day room service at our hotel.</p>
                </div>
                <div className="lower">
                        <img src={require('./images/yoga-pose.png')}  alt="fitness icon" className="enjoy__fitness-icon"/>
                    <h3>Fitness and Spa</h3>
                    <p>Access to fitness and Spa is part of our hotel package when you make a booking.</p>
                </div>
                
            </div>
            <div className="sec-col">
                    <div className="upper">
                        <span>
                            <img src={require('./images/coffee-cup.png')}alt="coffee icon" className="enjoy__coffee-icon"/>
                        </span>
                            <h3>Restaurant and Bars</h3>
                        <p>You have access to the world state of art restaurants and bars at our hotel</p>
                    </div>
                    <div class="lower">
                    
                            <img src={require('./images/free-wifi.png')} alt="wifi icon" class="enjoy__wifi-icon"/>
                            <h3>Free Wi-Fi Access</h3>
                            <p>You have access to 24-hours free Wi-Fi services irrespective of any room.</p>
                    </div>
            </div>
            <div class="third-col cont">
              <img src={require('./images/about.png')}/>
            </div>
        </div>
    
        </div>
        <div class="special-offers">
          
            <div class="page-header-container">
    
              <h2 class="page-header">Simplicity is the ultimate <br/>Watchword</h2>
        
                
                </div>
                <div class="row center-lg">
                    <div class="col image-col right-marg">
                        <img src={require('./images/hotel-1.jpg')} alt="room-image" class="small-image"/>
                        <img  src={require('./images/hotel-2.jpg')} alt="room-image" class="small-image"/>
                        <img  src={require('./images/hotel-3.jpg')} alt="room-image" class="small-image img-hide"/>
                        <div class="side-by-side-container">
                            <div class="large-image-container">
                                <img  src={require('./images/hotel-4.jpg')} alt="room-image-large" class="large-image"/>
                            </div>
                            {/* <div class="stacked-image-container">
                              <div><img  src={require('./images/hotel-5.jpg')}alt="room-image" class="small-image"/></div>
                              <div><img  src={require('./images/hotel-6.jpg')} alt="room-image" class="small-image"/></div>
                            </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <p class="offers-sub-title">
                                The fact that we are run by hospitality professionals<br/>and equipped with the world best interior designers <br/> is why our rooms and suites are second to none in <br/>the universe
                        </p>
                        <ul class="offers-list">
                            <li>
                                <div>
                                    <img src={require('./images/checked.png')} alt="tick" class="list-icon"/>
                                    <p class="list-text">Standard Room</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <img src={require('./images/checked.png')} alt="tick" class="list-icon"/>
                                    <p class="list-text">Executive Room</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <img src={require('./images/checked.png')} alt="tick" class="list-icon"/>
                                    <p class="list-text">King Suite</p>
                                </div>
                            </li>
                        </ul>
                        <a href="https://timbu.com/search?query=hotel" class="btn btn-fill btn-large centered">Book Now</a>
                    </div>
                </div>
        </div>
        <footer class="footer">
		<div class="footer-container">
			<nav class="footer-nav">
				<div class="footer-description">
					<h3 class="footer-description-title">Star Hotels</h3>
					<p>Hospitality and Comfort are our watchwords</p>
				</div>
				<div class="footer-contact-us">
					<h3 class="footer-description-title">Contact Us</h3>
					<p class="footer-description-detail"> 
						<img src={require('./images/location.png')} class="footer-description-icon" alt="star hotel location"/>

						<span>23, Fola Osibo, Lekki Phase 1</span></p>
					<p class="footer-description-detail">
						<img src={require('./images/phone-call.png')}class="footer-description-icon" alt="star hotels phone number"/> 
						<span>
					 08185956620</span></p>
					<p class="footer-description-detail">
						<img src={require('./images/mail.png')} class="footer-description-icon" alt="star hotels email"/>
						<span>support@starhotels.com</span> </p>
				</div>
				<div class="footer-follow-us">
					<h3 class="footer-description-title">Follow Us</h3>
					<ul class="footer-follow-us-lists">
						<li class="follow-us-list">
							<a href="">
								<img src={require('./images/facebook.png')} alt="star hotels facebook page"/>
							</a>
						</li>
						<li class="follow-us-list">
							<a href="">
								<img src={require('./images/twitter.png')}alt="star hotels twitter page"/>
							</a>
						</li>
						<li class="follow-us-list">
							<a href="">
								<img src={require('./images/instagram.png')} alt="star hotels instagram page"/>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</footer>
        </>
    )
}
export default Home;