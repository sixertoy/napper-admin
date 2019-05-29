import { getClassnameStates } from './utils';

export const mapStateToProps = ({ popin, showNavigation: minimized }) => {
  const className = getClassnameStates(popin, minimized);
  return {
    className,
    minimized,
    popin,
  };
};

export default mapStateToProps;
