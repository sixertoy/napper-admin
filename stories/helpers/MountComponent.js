import React from 'react';
import PropTypes from 'prop-types';

class MountComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { provider: [] };
  }

  componentDidMount() {
    const { onMount } = this.props;
    onMount(provider => this.setState({ provider }));
  }

  render() {
    const { children } = this.props;
    const { provider } = this.state;
    return children(provider);
  }
}

MountComponent.propTypes = {
  children: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
};

export default MountComponent;
