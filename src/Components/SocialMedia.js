import React, { useState } from "react";
import Github from "../assets/github.png";
import Youtube from "../assets/youtube.png";
import LinkedIn from "../assets/linkedin.png";

const SocialMedia = () => {

  const [subEmail,setSubEmail] = useState(null)
  const handleSubscribe = () =>{
    setSubEmail(null)
  }

  return (
    <div className="socialmedia">
      <div className="news-letter">
        <h2>For Regular Updates</h2>
        <h2>Subscribe to Our News Letters</h2>
        <div style={{display:"flex",gap:"5px"}}>
        <input style={{paddingLeft:"15px"}} className="email-subscribe" placeholder="Enter the Email" type="text" />
         <button style={{borderRadius:"25px",backgroundColor:"#02336D",color:"white",padding:"10px"}}
         onChange={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      <div className="follow-us">
        <h2>Follow us</h2>

        <div className="social-boxes">
          <div style={{ backgroundColor: "grey" }} className="social-box">
            <a href="https://github.com/Akashreghukumar">
              <img style={{ width: "60%" }} src={Github} />
            </a>
          </div>
          <div style={{ backgroundColor: "black" }} className="social-box">
            <a href="https://www.youtube.com/@thecodingengineer9376">
              <img style={{ width: "60%" }} src={Youtube} />
            </a>
          </div>
          <div style={{ backgroundColor: "#0A66C2" }} className="social-box">
            <a href="https://github.com/Akashreghukumar">
              <img style={{ width: "60%" }} src={LinkedIn} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
