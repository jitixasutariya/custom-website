import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/damshel.jpg";
import profile_icon2 from "../Assets/don't_look_up.jpg";
import profile_icon3 from "../Assets/red_notice.jpg";

// Card component to display individual profile cards
const Card = ({ image, altText, description, title, link }) => (
  <div className="column">
    <div className="card">
      {/* Image for the card */}
      <img src={image} alt={altText} />
      <div className="container">
        {/* Description of the profile */}
        <div className="profile-description">{description}</div>
        {/* Title of the profile */}
        <div className="profile-title">{title}</div>
        {/* Button to link to the profile */}
        <div className="profile-button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Watch Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

// UserProfileCard component to display a row of profile cards
const UserProfileCard = () => {
  return (
    <div className="row">
      {/* Card for Damsel */}
      <Card
        image={profile_icon}
        altText="Damsel"
        description="A NETFLIX ORIGINAL SERIES"
        title="Damsel"
        link="https://www.netflix.com/au/title/80991090"
      />
      {/* Card for Don't Look Up */}
      <Card
        image={profile_icon2}
        altText="Don't Look Up"
        description="A NETFLIX ORIGINAL SERIES"
        title="Don't Look Up"
        link="https://www.netflix.com/au/title/81252357"
      />
      {/* Card for Red Notice */}
      <Card
        image={profile_icon3}
        altText="Red Notice"
        description="A NETFLIX ORIGINAL SERIES"
        title="Red Notice"
        link="https://www.netflix.com/au/title/81161626"
      />
    </div>
  );
};

export default UserProfileCard;
