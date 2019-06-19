import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import { SmartButton } from '../buttons';

// application
const SmartDeletePopin = ({ id, name, onClose, mutation, update }) => (
  <Mutation mutation={mutation} update={update} onCompleted={onClose}>
    {deleteByID => (
      <div id="delete-popin" className="popin-container p40">
        <div className="popin-controls">
          <SmartButton
            icon="close"
            type="button"
            className="br50"
            onClick={onClose}
          />
        </div>
        <p className="align-center">
          <span>Êtes vous sûr de vouloir supprimer</span>
          <br />
          <b>{` ${name} `}</b>
          <span>?</span>
        </p>
        <div className="align-center">
          <SmartButton icon="close" label="Annuler" onClick={onClose} />
          <SmartButton
            type="danger"
            label="Confirmer"
            size="large"
            icon="delete"
            iconPlacement="after"
            onClick={() => deleteByID({ variables: { id } })}
          />
        </div>
      </div>
    )}
  </Mutation>
);

SmartDeletePopin.propTypes = {
  id: PropTypes.string.isRequired,
  mutation: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default SmartDeletePopin;
