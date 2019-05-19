import React from 'react';
import PropTypes from 'prop-types';

const FormSidebarInfos = ({ item, ...rest }) => {
  const ctime = (item && new Date(item.ctime).toLocaleString()) || '-';
  const mtime = (item && new Date(item.mtime).toLocaleString()) || '-';
  return (
    <ul {...rest} id="entity-infos">
      <li>
        <b className="is-block">Créé le:</b>
        <span className="is-block">{ctime}</span>
      </li>
      <li>
        <b className="is-block">Modifié le:</b>
        <span className="is-block">{mtime}</span>
      </li>
    </ul>
  );
};

FormSidebarInfos.defaultProps = {
  item: null,
};

FormSidebarInfos.propTypes = {
  item: PropTypes.object,
};

export default FormSidebarInfos;
