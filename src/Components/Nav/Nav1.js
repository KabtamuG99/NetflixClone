import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav1() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      }
      else setShow(false);

    });
    return () => {
     window.removeEventListener("scroll", undefined);
   }

  }, []);
  //console.log(show)
  return (
    <div className={`nav ${show &&
      "nav__black"}`}>
      <img
        className="nav__logo"
src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
      alt="Netfix logo" 
      />

      <img
        className="avatar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avater logo"
      />
    </div>
  );
}

export default Nav1;

