import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const sm = ["Instagram", "YouTube", "X", "WhatsApp"];
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [icon, setIcon] = useState(<i className="fa-solid fa-caret-down"></i>);
  const [icon2, setIcon2] = useState(
    <i className="fa-solid fa-caret-down"></i>
  );
  const drinks = ["Ordinary_Drink", "Cocktail"];

  const displayDrinks = () => {
    setHover2(true);
    setIcon2(<i className="fa-solid fa-caret-up"></i>);
  };

  const hideDrinks = () => {
    setHover2(false);
    setIcon2(<i className="fa-solid fa-caret-down"></i>);
  };

  const display = () => {
    setHover(true);
    setIcon(<i className="fa-solid fa-caret-up"></i>);
  };

  const hide = () => {
    setHover(false);
    setIcon(<i className="fa-solid fa-caret-down"></i>);
  };

  const selectDrink = (event) => {
    const selectedDrink = event.target.innerText;
  };

  return (
    <>
      <div className="bg-black w-full h-16 flex justify-between items-center px-8 text-white">
        <div className="flex items-center">
          <div
            className="bg-cover bg-center h-12 w-12"
            style={{
              backgroundImage: `url('https://cdn.knoji.com/images/logo/the-clove-club.jpg')`,
            }}
          ></div>
        </div>

        <div className="space-x-28 flex flex-wrap">
          <Link to="/">
            <div className="text-center">HOME</div>
          </Link>
          <Link to="Menu">
            <div>MENU</div>
          </Link>
          <div
            onDoubleClick={displayDrinks}
            className="active:border-white duration:300"
            onClick={hideDrinks}
          >
            <Link to="/drinks"> DRINKS {icon2}</Link>
          </div>
          <div onMouseEnter={display} onMouseLeave={hide}>
            CONTACT {icon}
          </div>
        </div>
      </div>

      {hover && (
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url("https://handluggageonly.co.uk/wp-content/uploads/2015/10/Paris-Restaurants-with-cool-views-7.jpg")`,
          }}
        >
          <div className="transform rounded">
            <div className="bg-black text-white w-28 border-2 border-gray-500 fixed text-center right-8 ml-20">
              {sm.map((s) => (
                <ol key={s}>
                  <li>{s}</li>
                </ol>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
