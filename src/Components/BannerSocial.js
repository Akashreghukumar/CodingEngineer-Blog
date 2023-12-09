import React from "react";
import Banner from "./Banner";
import SocialMedia from "./SocialMedia";

const BannerSocial = () => {
  return (
    <div className="bannersocial">
      <div>
        <img src="https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?size=626&ext=jpg&ga=GA1.2.189827998.1670072784" />
        {/* <Banner /> */}
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default BannerSocial;
