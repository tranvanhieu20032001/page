import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({setItems}) {

  const setActive = (props) => {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    const nav = document.querySelector('.'+props);
    nav.classList.add('active')
  }
  const links = [
    {
      id: 1,
      name:'all',
      type:'all',
      link: "All",
    },
    {
      id: 2,
      name:'supply',
      type:'supply',
      link: "Manpower Supply",
    },
    {
      id: 3,
      name:'mobile',
      type:'all',
      link: "Mobile App/Websites",
    },
    {
      id: 4,
      name:'uiux',
      type:'all',
      link: "UI/UX Design",
    },
  ];
  return (
    <div className="max-w-screen-sm mx-auto py-8">
      <ul className="flex flex-col md:flex-row justify-around items-center">
        {links.map(({ id, name, type, link }) => (
          <li
            className={`${id === 1 ? "active " : ""}font-semibold text-lg py-2 px-4 ${name}`}
            key={id}
            onClick={() => {setActive(name); setItems(type)}}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
