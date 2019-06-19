import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { slugify } from '@iziges/napper-core';

// import { usedebug } from '../../core/utils';

const getPageTitle = (pages, currentpath) => {
  const obj = pages.find(o => o && o.path === currentpath);
  const title = (obj && obj.name) || 'Home';
  return title;
};

const getBodyClass = () => 'home';

const TITLE_PREFIX = '[DEV]';
// const TITLE_PREFIX = usedebug ? '[DEV]' : '';
const TITLE_SUFFIX = 'Smart Admin Application';

const DocumentHead = ({ location, pages }) => {
  const { pathname } = location;
  const bodyclass = getBodyClass(pathname);
  const title = getPageTitle(pages, pathname);
  const pagetitle = `${TITLE_PREFIX} ${title} | ${TITLE_SUFFIX}`;
  return (
    <Helmet>
      <body className={bodyclass} />
      <title>{pagetitle}</title>
    </Helmet>
  );
};

DocumentHead.propTypes = {
  location: PropTypes.shape().isRequired,
  pages: PropTypes.array.isRequired,
};

export default withRouter(DocumentHead);
