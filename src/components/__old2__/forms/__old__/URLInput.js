import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Form, Input, Select } from 'antd';

import renderLabel from '../renderLabel';

const defaulPrefix = 'https://';
// const regex =
// ('(?!://)([a-zA-Z0-9-_]+.)*[a-zA-Z0-9][a-zA-Z0-9-_]+.[a-zA-Z]{2,11}?');

export class URLInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { prefix: defaulPrefix };
    this.selectBefore = this.selectBefore.bind(this);
  }

  selectBefore() {
    return (
      <Select
        defaultValue={defaulPrefix}
        onChange={value => this.setState({ prefix: value })}>
        <Select.Option value="https://">https://</Select.Option>
        <Select.Option value="http://">http://</Select.Option>
      </Select>
    );
  }

  render() {
    const { prefix } = this.state;
    const { label, help, name, ...rest } = this.props;
    return (
      <Form.Item
        {...rest}
        label={renderLabel(label, help)}
        className={`clearfix url-input ${rest.className || ''}`}>
        <Field
          name={name}
          parse={value => `${prefix}${value}`}
          format={value => (value || '').split(prefix).join('')}
          render={({ input }) => (
            <Input
              {...rest}
              value={input.value}
              onChange={input.onChange}
              addonBefore={this.selectBefore()}
            />
          )}
        />
      </Form.Item>
    );
  }
}

URLInput.defaultProps = {
  help: null,
  label: null,
};

URLInput.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default URLInput;
