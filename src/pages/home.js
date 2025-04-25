import React, { useRef } from "react";
import Counter from "../components/counter";

import "./home.css";
import ContactForm from "../components/contactForm";
import ImageSlider from "../components/imageSlider";
import CustomSlider from "../components/Testimonial";
import Footer from "../components/Footer";
import Border from "../components/Border";
import ServicesSection from "../components/ServiceSection";

const Card = ({ children }) => {
  const cardRef = useRef(null);
  const wrapRef = useRef(null);

  const settings = {
    reverse: 0, // Reverse tilt: 1, 0
    max: 35, // Max tilt: 35
    perspective: 1000, // Parent perspective px: 1000
    scale: 1.05, // Tilt element scale factor: 1.05
    axis: "", // Limit axis: "y", "x"
  };

  const handleMouseMove = (e) => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    const bcr = wrap.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (e.clientX - bcr.left) / bcr.width));
    const y = Math.min(1, Math.max(0, (e.clientY - bcr.top) / bcr.height));
    const reverse = settings.reverse ? -1 : 1;
    const tiltX = reverse * (settings.max / 2 - x * settings.max);
    const tiltY = reverse * (y * settings.max - settings.max / 2);

    card.style.transform = `
      rotateX(${settings.axis === "x" ? 0 : tiltY}deg)
      rotateY(${settings.axis === "y" ? 0 : tiltX}deg)
      scale(${settings.scale})
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <div
      className="card-wrap"
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-one card" ref={cardRef}>
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="App">
      <a className="floatingIcon" href="https://wa.me/+919179912190">
        <img src="./images/wp-floating.png" />
      </a>

      <div className="navBar-Container">
        <div className="mainLogo">
          <div className="img-container">
            <a href="#">
              <img src="./images/logo-trans.png" />
            </a>
          </div>
          <a href="#" style={{ textDecoration: "none", color: "#000" }}>
            <h2>napNart Studio</h2>
          </a>
        </div>
        <div className="navBar-Links">
          <a href="#">
            <button>
              Home <i class="ri-home-line"></i>
            </button>
          </a>
          <a href="#about">
            <button>
              About Me <i class="ri-user-line"></i>
            </button>
          </a>
          <a href="#portfolio">
            <button>
              Portfolio <i class="ri-user-4-line"></i>
            </button>
          </a>
          <a href="#services">
            <button>
              Services <i class="ri-article-line"></i>
            </button>
          </a>
          <a href="#contact">
            <button>
              Contact <i class="ri-contacts-book-3-line"></i>
            </button>
          </a>
        </div>

        <div className="navBar-Buttons">
          <a href="#contact">
            <button>
              <i class="ri-contacts-line"></i> <span>Let's Talk </span>
            </button>
          </a>
        </div>
        <div className="navBar-Links-responsive">
          <a href="#">
            <i class="ri-home-line"></i>
          </a>
          <a href="#about">
            <i class="ri-user-line"></i>
          </a>
          <a href="#portfolio">
            <i class="ri-user-4-line"></i>
          </a>
          <a href="#services">
            <i class="ri-article-line"></i>
          </a>
          <a href="#contact">
            <i class="ri-contacts-book-3-line"></i>
          </a>
        </div>
      </div>

      <section className="heroSection">
        <div className="leftSection">
          <h4>
            <span>Hi</span> &#128075; it's me.
          </h4>
          <h1>
            <span>Rushab</span> Kumeriya
          </h1>
          <div className="animated-text">
            <h2>
              I'm <span></span>
            </h2>
          </div>
          <p>
            Experience the work of a dedicated animation professional who
            combines artistic vision with technical precision to create
            unforgettable animated experiences
          </p>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/snapnart__studio?igsh=ZGUzMzM3NWJiOQ==">
              <img src="./images/instagram.png" />
            </a>
            <a href="https://youtube.com/@snapnart">
              <img src="./images/youtube.png" />
            </a>
            <a href="https://www.fiverr.com/s/ljdNABj">
              <img src="./images/fiver.png" />
            </a>
          </div>
          <div className="mainButtons">
            <a href="#contact">
              <button className="color-btn btn">Let Work's Together!</button>
            </a>
            <a href="#portfolio">
              <button className="normal-btn btn">
                See My Work <i class="ri-arrow-right-s-fill"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="rightSection">
          {/* <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div> */}
          <video autoPlay muted loop>
            <source src="./videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <Border />
      <div className="aboutSection" id="about">
        <h1>About Me</h1>
        <p className="subTitle">Animating Dreams into Reality</p>
        <div className="aboutWraper">
          <div className="about-left-section">
            <img src="./images/rushab-img.jpg" className="left-img-1" />
            <img src="./images/hero-image.jpg" className="left-img-2" />
          </div>
          <div className="about-right-section">
            <h2>
              Hi &#128075;, I'm <span>Rushab</span>
            </h2>
            <p>
              An animation enthusiast with a passion for bringing stories to
              life through captivating visuals. With a keen eye for detail and a
              love for creativity, I specialize in crafting dynamic animations
              that engage, entertain, and inspire. Whether it's 3D or motion
              graphics, I enjoy pushing the boundaries of what's possible,
              turning ideas into mesmerizing realities. Let’s create something
              amazing together!
            </p>
            <div className="social-media-icons aboutSocialIcon">
              <a href="https://www.instagram.com/snapnart__studio?igsh=ZGUzMzM3NWJiOQ==">
                <img src="./images/instagram.png" />
              </a>
              <a href="https://youtube.com/@snapnart">
                <img src="./images/youtube.png" />
              </a>
              <a href="https://www.fiverr.com/s/ljdNABj">
                <img src="./images/fiver.png" />
              </a>
            </div>

            <div className="AboutButton">
              <a href="#contact">
                <button className="color-btn btn">Let's Talk</button>
              </a>
              <a href="#portfolio">
                <button className="normal-btn btn">See my Work</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Border />
      <div className="PortfolioSection" id="portfolio">
        <h1>Portfolio</h1>
        <p className="subTitle">Some of My Work</p>
        <div className="portfolio-videos">
          <div className="portfolio-video-wrap">
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/UZPYv_AYYqI?si=WG8c2Wi43cwKuTgL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-video-wrap">
            {" "}
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/DDAktAp4PbY?si=wEZOrN_y7Mc-UFI3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-video-wrap">
            {" "}
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/EuXBEly0HJU?si=EQ6CW9kCCUQdAC_s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-video-wrap">
            {" "}
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/bz-VFUZTvGA?si=8KJz64sBybu3iqm1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Border />
      <section className="servicesSection" id="services">
        <ServicesSection />
      </section>

      <Border />

      <div className="testimonialsSection">
        <h1>What Our Clients Say</h1>
        <p className="subTitle">
          Hear from those who have experienced the difference.
        </p>
        <div className="testimonialWraper">
          <CustomSlider />
          <div className="counter-section">
            <div className="counterWrap">
              <Counter end={20} label=" 	&#128203; Animation Projects" />
              <p> Projects</p>
            </div>
            <div className="counterWrap">
              <Counter end={5} label="&#128338; Years Of Legacy" />
              <p> Experience</p>
            </div>
            <div className="counterWrap">
              <Counter end={20} label="	&#128512; Happy Clients" />
              <p> Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      <Border />
      <div className="contactSection" id="contact">
        <h1>Contact Us</h1>
        <p className="subTitle">Get in Touch with Us</p>
        <div className="contact-section-wrapper">
          <div className="contact-left-section">
            <ImageSlider />
          </div>
          <div className="contact-right-section">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="footerSection">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
