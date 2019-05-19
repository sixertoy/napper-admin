import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Form, Input, TreeSelect } from 'antd';

import renderLabel from '../renderLabel';
import { MarkdownEditor } from '.';

const renderTreeNode = data =>
  (data &&
    data.map(obj => {
      if (obj.children && obj.children.length) {
        return (
          <TreeSelect.TreeNode key={obj.id} title={obj.label}>
            {renderTreeNode(obj.children)}
          </TreeSelect.TreeNode>
        );
      }
      return <TreeSelect.TreeNode key={obj.id} title={obj.label} />;
    })) ||
  [];

const renderSingleCategory = () => (
  <Field
    name="category"
    render={({ input }) => (
      <React.Fragment>
        <Input
          type="text"
          onChange={({ target }) => {
            console.log('value', target.value);
          }}
        />
        <TreeSelect
          allowClear
          treeDefaultExpandAll
          placeholder="Please select"
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          onChange={value => {
            console.log('parent category selected', value);
          }}>
          {renderTreeNode()}
        </TreeSelect>
        <MarkdownEditor
          name="description"
          input={{
            value: '',
            onChange: value => {
              console.log('value', value);
            },
          }}
        />
      </React.Fragment>
    )}
  />
);

export const CategoriesInput = ({ help, name, label, provider, ...rest }) => (
  <Form.Item
    label={renderLabel(label, help)}
    className={`categories-input ${rest.className || ''}`}>
    {console.log('provider', provider)}
    <div className="flex-columns col-100 p12">
      <div className="col-50">{renderSingleCategory(provider)}</div>
      <div className="col-50" />
    </div>
  </Form.Item>
);

CategoriesInput.defaultProps = {
  help: null,
  label: null,
  provider: [],
};

CategoriesInput.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  provider: PropTypes.array,
  name: PropTypes.string.isRequired,
};

export default CategoriesInput;
