import { getClassnameStates } from './utils';

export const mapStateToProps = ({ showNavigation: minimized, popin }) => {
  const className = getClassnameStates(popin, minimized);
  return {
    className,
    minimized,
    popin,
  };
};

export default mapStateToProps;
