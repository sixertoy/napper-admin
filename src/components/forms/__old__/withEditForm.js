import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import arrayMutators from 'final-form-arrays';
import { Query, Mutation } from 'react-apollo';
import { Form as FinalForm } from 'react-final-form';

import TinyError from '../ui/TinyError';
import TinyLoader from '../ui/TinyLoader';

const withEditForm = (
  WrappedComponent,
  entityName,
  actions,
  validator,
  calculator
) => {
  class EditForm extends React.PureComponent {
    render() {
      const { id } = this.props;
      return (
        <Query query={actions.retrieve} variables={{ id }}>
          {({ loading, error, data }) => {
            if (error) return <TinyError error={error} />;
            const provider = data[entityName] || null;
            return (
              <Mutation mutation={actions.update} variables={{ id }}>
                {(updateMutation, result) => (
                  <FinalForm
                    initialValues={provider}
                    validate={validator}
                    mutators={{ ...arrayMutators }}
                    calculator={[calculator || null].filter(v => v)}
                    render={({ form, pristine, handleSubmit }) => {
                      const isloading = result.loading || loading;
                      const disabled = pristine || isloading;
                      return (
                        <Form
                          layout="vertical"
                          className="flex-wrapper"
                          onSubmit={handleSubmit}>
                          {isloading && <TinyLoader />}
                          <WrappedComponent
                            {...this.props}
                            form={form}
                            disabled={disabled}
                            provider={provider}
                            onSubmit={() => form.submit()}
                            onReset={() => form.reset(provider)}
                          />
                        </Form>
                      );
                    }}
                    onSubmit={(variables, form) =>
                      updateMutation({ variables })
                        .then(() => form.reset())
                        .catch(() => {})
                    }
                  />
                )}
              </Mutation>
            );
          }}
        </Query>
      );
    }
  }

  EditForm.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return EditForm;
};

export default withEditForm;
