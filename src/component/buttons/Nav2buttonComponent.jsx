import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Nav2buttonComponent({info, handleingOff, setInfo, tooltipMessage, delay, icon}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipMessage}
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" delay={{ show: 50, hide: 200 }} overlay={renderTooltip}>
              <button  data-aos="fade-zoom-in" data-aos-delay={delay} className={info ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setInfo(!info)}}>
              <span></span><span></span><span></span><span></span><i className={icon}></i>
          </button> 
  </OverlayTrigger>
  )
}

export default Nav2buttonComponent