import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../App';
import './main.css';
import SideMenu from '../../components/sideMenu/SideMenu';
import Header from '../header/Header';
import Home from '../home/Home';
import Categories from '../categories/Categories';
import MyLibrary from '../myLibrary/MyLibrary';
import Bag from '../bag/Bag';
import About from '../about/About';
import Contacts from '../contacts/Contacts';

function Main() {
  const { library, bag,  contacts, about } = useContext(AppContext)
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagref = useRef();
  const contactsRef = useRef();
  const aboutRef = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'bag',
      ref: bagref,
      active: false,
    },
    { name: 'about', ref: aboutRef, active: false },
    { name: 'contacts', ref: contactsRef, active: false },
  ];


  const handelToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  }

  const fetchData = () => {
    fetch('http://localhost:3000/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggelActive={handelToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <MyLibrary games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagref} />
              <About games={about} reference={aboutRef} />
              <Contacts games={contacts} reference={contactsRef} />
            </>
          )}

        </div>
      </div>
    </main>
  );
}

export default Main;