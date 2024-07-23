import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Nav2buttonComponent({ info, handleingOff, setInfo, tooltipMessage, delay, icon, timeAnimation }) {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipMessage}
    </Tooltip>
  );

  const buttonStyle = info ?  { animation: `moveGradientRules 10s ease-in-out infinite` }:{} ;

  return (
    <OverlayTrigger placement="top" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
      <button  style={buttonStyle}  data-aos="fade-zoom-in"  data-aos-delay={delay}  className="btn-rules-toggle"   onClick={() => { handleingOff(); setInfo(!info); }}>
        <span></span><span></span><span></span><span></span><i className={icon}></i>
      </button> 
    </OverlayTrigger>
  );
}

export default Nav2buttonComponent;
