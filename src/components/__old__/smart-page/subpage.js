import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { pathnameToKey } from '../../utils/router';

const LinksNavigation = ({ items, match }) => (
  <nav className="page-links-navigation">
    {items.map(({ icon, name, path }) => {
      const key = pathnameToKey('linkedto', path);
      const linkto = path.replace(match.path, match.url);
      return (
        <Link key={key} to={linkto}>
          <i className={`icon icon-${icon}`} />
          <span className="label">{name}</span>
        </Link>
      );
    })}
  </nav>
);

LinksNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(LinksNavigation);
