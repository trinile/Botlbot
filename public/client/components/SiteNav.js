import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Login from '../components/Login';
import Logout from '../components/Logout';
import styles from '../styles/sitenav.css';

const SiteNav = ({ isAuthenticated }) => (
  <div>
    <nav className={styles.sitenav}>
      <img
        src="http://res.publicdomainfiles.com/pdf_view/2/13494514811992.png"
        alt="bottle silhouette"
        className={styles.brand}
      />
      <ul className={styles.ul}>
        <li className={styles.li}>
          { isAuthenticated ? <Logout /> : <Login /> }
        </li>
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
      </ul>
    </nav>
  </div>
);

SiteNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default SiteNav;
