import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Form, Input, Button, Tree, Tag } from 'antd';

import renderLabel from '../renderLabel';

const renderLoop = data =>
  (data &&
    data.map(obj => {
      if (obj.children && obj.children.length) {
        return (
          <Tree.TreeNode key={obj.id} title={obj.label}>
            {renderLoop(obj.children)}
          </Tree.TreeNode>
        );
      }
      return <Tree.TreeNode key={obj.id} title={obj.label} />;
    })) ||
  [];

export class CategoriesInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.createTagHandler = this.createTagHandler.bind(this);
    this.state = {
      expanded: [],
      inputvalue: '',
      categories: [],
      provider: props.provider,
    };
  }

  onDragEnter(info) {
    console.log(info);
    // this.setState({ expanded: info.expanded });
  }

  onDrop(info) {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.provider];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    }
    this.setState({
      provider: data,
    });
  }

  createTagHandler() {
    const { inputvalue } = this.state;
    const newcategories = inputvalue
      .split(',')
      .map(v => v.trim())
      .filter(v => v !== '')
      .map((label, index) => ({
        label,
        id: `${Date.now()}-${index}`,
      }));
    this.setState(({ categories }) => ({
      inputvalue: '',
      categories: categories.concat(newcategories),
    }));
  }

  renderTag(obj) {
    return (
      <Tag
        closable
        className="mb3"
        key={obj.id}
        onClose={evt => {
          evt.preventDefault();
          this.setState(({ categories }) => ({
            categories: categories.filter(o => o.id !== obj.id),
          }));
        }}>
        {obj.label}
      </Tag>
    );
  }

  render() {
    const { label, help, name, ...rest } = this.props;
    const { inputvalue, categories } = this.state;
    return (
      <Form.Item
        label={renderLabel(label, help)}
        className={`categories-input ${rest.className || ''}`}>
        <Field
          name={name}
          render={({ input }) => (
            <div className="flex-columns col-100 p12">
              <div className="col-50">
                <Input
                  value={inputvalue}
                  className="mb7"
                  placeholder="Titre de la catégorie"
                  onChange={({ target: { value } }) =>
                    this.setState({ inputvalue: value })
                  }
                />
                <div className="tags mb7">
                  {categories && categories.map(this.renderTag)}
                </div>
                <Button
                  type="primary"
                  icon="save"
                  htmlType="button"
                  onClick={this.createTagHandler}>
                  <span>Créer</span>
                </Button>
              </div>
              <div className="col-50">
                <Tree
                  showLine
                  draggable
                  onDrop={this.onDrop}
                  className="draggable-tree"
                  onDragEnter={this.onDragEnter}>
                  {renderLoop(input.value)}
                </Tree>
              </div>
            </div>
          )}
        />
      </Form.Item>
    );
  }
}

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
