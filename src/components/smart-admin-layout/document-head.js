import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Types from '../../types';
import { usedebug } from '../../core/utils';
import { getPageTitle, getBodyClass } from '../../utils';

const TITLE_PREFIX = usedebug ? '[DEV]' : '';
const TITLE_SUFFIX = 'Smart Admin Application';

const DocumentHead = ({ location, routes }) => {
  const { pathname } = location;
  const bodyclass = getBodyClass(pathname);
  const title = getPageTitle(routes, pathname);
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
  routes: Types.RoutesType.isRequired,
};

export default withRouter(DocumentHead);
