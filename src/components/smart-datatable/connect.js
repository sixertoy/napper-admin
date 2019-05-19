import { openDeletePopin } from '../../actions';

export const mapStateToProps = null;

export const mapDispatchToProps = (dispatch, ownprops) => ({
  onDeleteClick: (id, name) => {
    const { actions } = ownprops;
    const opts = { ...actions, id, name };
    dispatch(openDeletePopin(opts));
  },
  onEditClick: ({ id }) => {
    const { history, match } = ownprops;
    // add trailing slash if missing
    const url = match.url.slice(-1) === '/' ? match.url : `${match.url}/`;
    history.push(`${url}${id}`);
  },
});
