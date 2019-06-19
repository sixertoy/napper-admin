import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tag } from 'antd';
import { FieldArray } from 'react-final-form-arrays';

import renderLabel from '../renderLabel';

const getkey = (name, index) => `tag::${name}::${index}`;

const renderItem = (fieldname, fields, index) => {
  const val = fields.value[index];
  return (
    <Tag
      closable
      className="mb3"
      key={getkey(fieldname, index)}
      onClose={evt => {
        evt.preventDefault();
        fields.remove(index);
      }}>
      {val}
    </Tag>
  );
};

export class TagsInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { primary: '' };
    this.onAddChange = this.onAddChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({ primary: target.value });
  }

  onAddChange(value) {
    const { mutatorpush, name } = this.props;
    // le champ tag peut prendre des valeurs
    // separees par des virgules
    this.setState({ primary: '' }, () => {
      value
        .split(',')
        .filter(v => v && v.trim() !== '')
        .forEach(v => mutatorpush(name, v.trim()));
    });
  }

  render() {
    const { disabled, placeholder, name, label, help } = this.props;
    const { primary } = this.state;
    return (
      <Form.Item className="tag-input" label={renderLabel(label, help)}>
        <Input.Search
          disabled={disabled}
          value={primary}
          enterButton="Ajouter"
          placeholder={placeholder}
          onSearch={this.onAddChange}
          onChange={this.onInputChange}
        />
        <div className="tags mt12">
          <FieldArray name={name}>
            {({ fields }) =>
              fields.map((fname, index) => renderItem(fname, fields, index))
            }
          </FieldArray>
        </div>
      </Form.Item>
    );
  }
}

TagsInput.defaultProps = {
  disabled: false,
  help: 'Vous pouvez ajouter plusieurs valeurs en les séparant par une virgule',
  label: null,
  placeholder: '',
};

TagsInput.propTypes = {
  disabled: PropTypes.bool,
  help: PropTypes.string,
  label: PropTypes.string,
  mutatorpush: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TagsInput;
