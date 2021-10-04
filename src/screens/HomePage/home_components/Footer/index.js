import React from "react";

import "../../index.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__title">Get in touch</p>
      <a href="">
        <p className="footer__email">samith.wss@gmail.com</p>
      </a>
      <div class="logo-container">
        <div>
          <a href="#">
            <img src="/facebookLogo.png"></img>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/behanceLogo.png"></img>
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/linkedinLogo.png"></img>
          </a>
        </div>
      </div>
      <p className="footer__copyright">
        Designed by Samith Sankalpa in 2021. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
{
  /* <p className="works__name">YouTube Watch</p>
   */
}
