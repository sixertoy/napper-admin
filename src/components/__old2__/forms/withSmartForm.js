import React from 'react';
import lget from 'lodash.get';
import PropTypes from 'prop-types';
import arrayMutators from 'final-form-arrays';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { Form as FinalForm } from 'react-final-form';

import TinyError from '../ui/TinyError';
import TinyLoader from '../ui/TinyLoader';

const withSmartForm = ({
  read,
  update,
  // validator,
  // calculator,
}) => (WrappedComponent, key) => {
  class SmartForm extends React.PureComponent {
    render() {
      const { match } = this.props;
      const id = lget(match, 'params.id');
      return (
        <Query query={read} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <TinyLoader />;
            if (error) return <TinyError error={error} />;
            const provider = data[key];
            return (
              <Mutation mutation={update} variables={{ id }}>
                {(updateMutation, result) => (
                  <FinalForm
                    initialValues={provider}
                    // validate={validator}
                    mutators={{ ...arrayMutators }}
                    // calculator={[calculator || null].filter(v => v)}
                    render={({ form, pristine, handleSubmit }) => {
                      const isloading = result.loading || loading;
                      const disabled = pristine || isloading;
                      return (
                        <form
                          className="smartadmin-final-form flex-wrapper"
                          onSubmit={handleSubmit}>
                          <WrappedComponent
                            {...this.props}
                            form={form}
                            data={provider}
                            disabled={disabled}
                            onSubmit={() => form.submit()}
                            onReset={() => form.reset(provider)}
                          />
                        </form>
                      );
                    }}
                    onSubmit={(variables, form) => {
                      updateMutation({ variables })
                        .then(() => form.reset())
                        .catch(() => {});
                    }}
                  />
                )}
              </Mutation>
            );
          }}
        </Query>
      );
    }
  }

  SmartForm.propTypes = {
    match: PropTypes.object.isRequired,
  };

  return withRouter(SmartForm);
};

export default withSmartForm;
