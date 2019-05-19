import React from 'react';
import PropTypes from 'prop-types';

import { SmartButton, SmartButtonGroup } from '../../buttons';

const FormSidebarControls = ({ reset, submit, labels, disabled }) => (
  <SmartButtonGroup>
    {reset && (
      <SmartButton
        type="button"
        onClick={reset}
        className="smartadmin-cancel-button"
        disabled={(disabled && disabled.cancel) || disabled === true || false}>
        <span>{(labels && labels.reset) || 'Annuler'}</span>
      </SmartButton>
    )}
    {submit && (
      <SmartButton
        type="submit"
        className="smartadmin-submit-button"
        disabled={(disabled && disabled.submit) || disabled === true || false}>
        <span>{(labels && labels.submit) || 'Enregistrer'}</span>
      </SmartButton>
    )}
  </SmartButtonGroup>
);

FormSidebarControls.defaultProps = {
  disabled: null,
  labels: null,
  reset: null,
  submit: true,
};

FormSidebarControls.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  labels: PropTypes.object,
  reset: PropTypes.func,
  submit: PropTypes.bool,
};

export default FormSidebarControls;
