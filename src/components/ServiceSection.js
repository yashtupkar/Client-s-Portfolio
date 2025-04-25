import React, { useState } from "react";
import "./serviceSection.css"

// Popup component to show detailed card info
const Popup = ({ content, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup_row">
          {" "}
          <h2>{content.title}</h2>
          <button className="reed-more-btn close-btn" onClick={onClose}>
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <div className="popup-description">
          <b>Description:</b> <p>{content.description}</p>
          <b>Software:</b> <p>{content.software}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Card data to display in popup
  const cards = [
    {
      id: 1,
      title: "Animation",
      titledescription:
        "Toon 3D Kids Animation with realistic Dance motion of characters, performing any actions, playing, singing etc.",
      description:
        "We create highly engaging 3D toon-style animations for kids in stunning 4K Ultra HD at 60 FPS. Our animations feature realistic dance motions and lively characters performing various actions such as playing and singing. Perfect for games, movies, video explainers, or tales, we can bring your projects to life with customized audio and detailed character animations. Ideal for any 3D project that needs high-quality, immersive visuals.",
      software: "Blender, iClone8, etc.",
      img: "./images/animate.png",
    },
    {
      id: 2,
      title: "3D Character",
      titledescription:
        "Make 3d realistic characters for games , cartoon and movies.",
      software: "Character creator.",
      description:
        "We specialize in creating high-quality, 3D characters with lifelike detail and realistic movements. Whether for games, movies, or animations, our custom characters are designed to fit your unique vision. From dynamic dance motions to playful or action-packed behaviors, we ensure that every character is tailored to your project’s needs. Delivered in 4K Ultra HD at 60 FPS, our characters bring your stories and ideas to life with stunning realism and precision.",
      img: "./images/charactor-creator.png",
    },
    {
      id: 3,
      title: "Video Editing",
      titledescription:
        "Transform raw footage into polished, 4K Ultra HD content with seamless transitions and custom audio. Perfect for films, games, and more!",
      software: "After Effect, Premiere pro, etc",
      description:
        "Our professional video editing services transform raw footage into polished, engaging content. Whether you need seamless transitions, visual effects, or custom audio integration, we bring your project to its full potential. We work with 4K Ultra HD resolution and ensure smooth, high-quality output at 60 FPS, making your videos perfect for games, films, commercials, or explainer videos. Let us enhance your visuals and create a final product that captivates your audience.",
      img: "./images/video-editing.png",
    },
  ];

  // Function to handle opening the popup
  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="servicesSection" id="services">
      <h1>Our Services</h1>
      <p className="subTitle">Tailored Solutions for Every Need</p>

      <div className="Card-section">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-img">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card-content">
              <div className="cardTxt">
                <h2>{card.title}</h2>
                <p>{card.titledescription}</p>
              </div>
              <button className="reed-more-btn" onClick={() => openPopup(card)}>
                Read More
              </button>
            </div>
          </div>
        ))}

        <div className="extra-card">
          <h2>Do You Want Something </h2>
          <h2>Different?</h2>
          <p>Let us know</p>
          <a href="#contact">
            <button className="reed-more-btn">
              Know us <i className="ri-mail-line"></i>
            </button>
          </a>
        </div>
      </div>

      {/* Render Popup if a card is selected */}
      {isPopupOpen && selectedCard && (
        <Popup content={selectedCard} onClose={closePopup} />
      )}
    </section>
  );
};

export default ServicesSection;
