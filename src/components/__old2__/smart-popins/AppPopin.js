import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';

// application
import { Logger } from '../../core';
import { closePopin } from '../../actions';

class AppPopin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  componentWillReceiveProps(next) {
    const { opened } = this.state;
    if (opened) return;
    if (!next.popin && opened) {
      this.setState({ opened: false });
      return;
    }
    if (next.popin && !opened) {
      this.setState({ opened: true });
    }
  }

  closePopin = () => {
    const { dispatch } = this.props;
    dispatch(closePopin());
  };

  renderPopin = () => {
    const { popin } = this.props;
    const { Type, ...rest } = popin;
    try {
      return (
        <div className="popin-foreground">
          <Type {...rest} onClose={this.closePopin} />
        </div>
      );
    } catch (err) {
      Logger.debug(`Unable to open popin with type: ${Type}`);
      return null;
    }
  };

  render() {
    const { popin } = this.props;
    const { opened } = this.state;
    if (!popin) return null;
    return (
      <div className="popin">
        {opened && (
          <React.Fragment>
            <Motion
              style={{ opacity: spring(100) }}
              defaultStyle={{ opacity: 0 }}>
              {value => {
                const opacity = value.opacity / 100;
                return <div style={{ opacity }} className="popin-background" />;
              }}
            </Motion>
            {this.renderPopin()}
          </React.Fragment>
        )}
      </div>
    );
  }
}

AppPopin.defaultProps = {
  popin: null,
};

AppPopin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popin: PropTypes.object,
};

const mapStateToProps = ({ popin }) => ({ popin });

export default connect(mapStateToProps)(AppPopin);
