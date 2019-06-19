import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const FormControls = ({ reset, submit, labels, disabled }) => (
  <Button.Group className="form-controls">
    {reset && (
      <Button
        type="danger"
        icon="close"
        size="large"
        onClick={reset}
        htmlType="button"
        disabled={(disabled && disabled.cancel) || disabled === true || false}>
        <span>{(labels && labels.reset) || 'Annuler'}</span>
      </Button>
    )}
    {submit && (
      <Button
        type="primary"
        icon="save"
        size="large"
        htmlType="submit"
        disabled={(disabled && disabled.submit) || disabled === true || false}>
        <span>{(labels && labels.submit) || 'Enregistrer'}</span>
      </Button>
    )}
  </Button.Group>
);

FormControls.defaultProps = {
  disabled: null,
  labels: null,
  reset: null,
  submit: true,
};

FormControls.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  labels: PropTypes.object,
  reset: PropTypes.func,
  submit: PropTypes.bool,
};

export default FormControls;
