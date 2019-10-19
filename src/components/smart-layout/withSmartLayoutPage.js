import React, { PureComponent } from 'react';

const withSmartLayoutPage = WrappedComponent => {
  class LayoutPage extends PureComponent {
    render() {
      console.log('WrappedComponent', WrappedComponent);
      return <div></div>;
      // const pageId = `${path}-page`;
      // const hasChilds = childs && childs.length;
      // return (
      //   <div id={pageId} className="page">
      //     {/* <BackTop visibilityHeight={200} /> */}
      //     <div className="flex-columns flex-between items-center pb12 mb20 bb1">
      //       <SmartLayoutTitle text={name} />
      //       {/* {(links && <LinkedPages items={links} />) || null} */}
      //       {/* {(isCollapsable && <SidebarControl />) || null} */}
      //     </div>
      //     {subtitle && <SmartLayoutSubtitle text={subtitle} />}
      //     <div className="flex-columns flex-between mt20">{children}</div>
      //   </div>
      // );
    }
  }

  return LayoutPage;
};

export default withSmartLayoutPage;
