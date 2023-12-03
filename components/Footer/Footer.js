import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="bg-violet-100 flex justify-center px-4 py-4" style={{  width: '1300px', height: '70px'}}>
        <a
          href="https://www.instagram.com/your-instagram-handle/"
          target="_blank"
        >
          <img
            src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
            className="w-8 h-8 mx-4"
          />
        </a>
        
        <a
          href="https://twitter.com/your-twitter-handle/"
          target="_blank"
        >
          <img
            src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png"
            className="w-8 h-8 mx-4"
          />
        </a>
        <a
          href="https://linkedin.com/your-linkedin-handle/"
          target="_blank"
        >
          <img
            src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
            className="w-8 h-8 mx-4"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;