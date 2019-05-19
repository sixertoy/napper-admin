import { string, func, object, oneOf, shape } from 'prop-types';

export const ColObject = shape({
  classname: string,
  key: string.isRequired,
  label: string.isRequired,
  type: oneOf(['bool', 'text']),
  validate: func,
});

export const QLObject = shape({
  create: object,
  mutation: object,
  query: object,
  update: func,
});

export const ActionHandlersObject = shape({
  onDeleteClick: func,
  onEditClick: func,
});
