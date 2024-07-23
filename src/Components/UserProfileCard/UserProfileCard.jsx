import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/damshel.jpg";
import profile_icon2 from "../Assets/don't_look_up.jpg";
import profile_icon3 from "../Assets/red_notice.jpg";

const UserProfileCard = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img src={profile_icon} alt="" />
          <div className="container">
            <div className="profile-description">A NETFLIX ORIGNAL SERIES</div>
            <div className="profile-title">Damsel</div>
            <div className="profile-button">
              <a
                href="https://www.netflix.com/au/title/80991090"
                target="_blank"
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={profile_icon2} alt="" />
          <div className="container">
            <div className="profile-description">A NETFLIX ORIGNAL SERIES</div>
            <div className="profile-title">Don't Look Up</div>
            <div className="profile-button">
              <a
                href="https://www.netflix.com/au/title/81252357"
                target="_blank"
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={profile_icon3} alt="" />
          <div className="container">
            <div className="profile-description">A NETFLIX ORIGNAL SERIES</div>
            <div className="profile-title">Red Notice</div>
            <div className="profile-button">
              <a
                href="https://www.netflix.com/au/title/81161626"
                target="_blank"
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
