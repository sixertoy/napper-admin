import { connect } from 'react-redux';

import SmartPageComponent from './SmartPageComponent';

const mapStateToProps = ({ showSidebar }, { path }) => {
  // const isEntityPage = Boolean(
  //   match.params && Object.keys(match.params).length
  // );
  // const isCollapsable = Boolean(collapsable && !isEntityPage);
  const pageId = `${path}-page`;
  // const pageId = `${slugify(path)}-page`;
  const sidebarClassname = (!showSidebar && 'opened') || '';
  return {
    // isCollapsable,
    // isEntityPage,
    pageId,
    showSidebar,
    sidebarClassname,
  };
};

export default connect(mapStateToProps)(SmartPageComponent);
