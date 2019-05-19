import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GraphqlDebuggerItem from './item';
import { timesort } from './utils';
import { mapStateToProps } from './connect';

const GraphqlDebugger = ({ errors }) => (
  <div id="smartadmin-grapqhl-debugger">
    {errors && errors.length > 0 && (
      <ul className="list p20">
        {errors.sort(timesort).map(obj => (
          <GraphqlDebuggerItem item={obj} />
        ))}
      </ul>
    )}
  </div>
);

GraphqlDebugger.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(GraphqlDebugger);
