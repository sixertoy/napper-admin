import PropTypes from 'prop-types';

export const QLObject = PropTypes.shape({
  create: PropTypes.object,
  mutation: PropTypes.object,
  query: PropTypes.object,
  update: PropTypes.func,
});

export const ActionHandlersObject = PropTypes.shape({
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
});

export const SmartTableColType = PropTypes.arrayOf(
  PropTypes.shape({
    classname: PropTypes.string,
    // TODO: trouver une moyen de faire requireOneOfTheseProps([])
    key: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
    // TODO: rendre primary obligatoire sur un object de type col
    primary: PropTypes.bool,
    type: PropTypes.oneOf(['bool', 'date', 'text']),
    validate: PropTypes.func,
  })
);
