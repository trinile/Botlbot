import React from 'react';
import Link from 'react-router';
import SignInManager from '../Containters/SignInManger';
import styles from '../styles/main.css';

const SiteNav = () => (
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
        <SignInManager />
      </li>
    </ul>
  </nav>
);

export default SiteNav;
