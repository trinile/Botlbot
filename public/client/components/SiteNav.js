import React from 'react';
import Link from 'react-router';
import Login from '../components/Login';
import Logout from '../components/Logout';
import styles from '../styles/sitenav.css';

const SiteNav = ({ isAuthenticated }) => (
  <nav className={styles.sitenav}>
    <img
      src="http://res.publicdomainfiles.com/pdf_view/2/13494514811992.png"
      alt="bottle silhouette"
      styles={styles.brand}
    />
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link
          to="/about"
          activeClassName="active-nav-link"
        >
          About
        </Link>
      </li>
      <li className={styles.li}>
        <Link
          to="/about"
          activeClassName="active-nav-link"
        >
          Other Link
        </Link>
      </li>
      <li className={styles.li}>
        { isAuthenticated ? <Logout /> : <Login /> }
      </li>
    </ul>
  </nav>
);

export default SiteNav;
