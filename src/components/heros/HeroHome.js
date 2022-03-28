import {
  Link
} from 'react-router-dom';
import PropTypes from "prop-types";
import HeroSlider from './HeroSlider';

const HeroHome = ({ company }) => {

  const { title, slogan} = company;

  return (
    <article className="hero animate__animated animate__fadeIn">
      <div className="hero-container">
        
        <div className="hero__message">
          <h2 className="hero__message-title">
            {title}
          </h2>
          <p className="hero__message-paragraph">
            {slogan}
          </p>
          <div className="hero__message-info-container">
            
            <Link to="/news" className="hero__message-buy-button">
              More information
            </Link>
          </div>
        </div>
        <div className="hero__figure">
          <figure className="hero__figure-image-container">
           <HeroSlider className="hero__figure-image"/>
          </figure>
        </div>
      </div>
     
    </article>
  );
}

HeroHome.propTypes = {
  company: PropTypes.object
}

export default HeroHome;