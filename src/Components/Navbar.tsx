import React, { FC, useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar: FC = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={'/'}
          className={'flex items-center gap-2'}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logog" className={'w-9 h-9 object-contain'} />
          <p className={'text-white text-[18px] cursor-pointer flex'}>
            Chamara <span className={'sm:block hidden'}>| Weerasinghe</span>
          </p>
        </Link>
        <ul className={'list-none hidden sm:flex flex-row gap-10'}>
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`
                                ${
                                  active === link.title
                                    ? 'text-white'
                                    : 'text-secondary'
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className={'w-[28px] h-[28px] object-contain cursor-pointer'}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul
              className={
                'list-none flex flex-col items-start justify-end gap-4 '
              }
            >
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`
                                   ${
                                     active === link.title
                                       ? 'text-white'
                                       : 'text-secondary'
                                   } font-popins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
