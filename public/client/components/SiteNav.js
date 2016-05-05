import React from 'react';
import Link from 'react-router';
import Login from '../components/Login';
import Logout from '../components/Logout';
import styles from '../styles/main.css';

const SiteNav = ({ isAuthenticated }) => (
  <nav>
    <img
      src="http://res.publicdomainfiles.com/pdf_view/2/13494514811992.png"
      alt="bottle silhouette"
      styles={styles.brand}
    />
    <ul styles={styles['nav-list']}>
      <li>
        <Link
          to="/about"
          activeClassName="active-nav-link"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          activeClassName="active-nav-link"
        >
          Other Link
        </Link>
      </li>
      <li>
        { isAuthenticated ? <Logout /> : <Login /> }
      </li>
    </ul>
  </nav>
);

export default SiteNav;
