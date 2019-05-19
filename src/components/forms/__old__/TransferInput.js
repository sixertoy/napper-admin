import React from 'react';
import PropTypes from 'prop-types';
import { Transfer, Form } from 'antd';
import { Field } from 'react-final-form';
import { uniq } from '@smart-core/admin/lib/utils';

// application
import renderLabel from '../renderLabel';

const defaultKeysMap = {
  key: 'id',
  label: 'label',
};

export class TransferInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      selectedKeys: [],
      targetKeys: props.checked || [],
    };
  }

  componentWillReceiveProps({ checked }) {
    this.setState(({ targetKeys }) => {
      // FIXME -> erreur quand on supprimer un element
      let updates = targetKeys.concat(checked);
      updates = uniq(updates);
      return { targetKeys: updates };
    });
  }

  handleSelectChange(sourceKeys, targetKeys) {
    const selectedKeys = [...sourceKeys, ...targetKeys];
    this.setState({ selectedKeys });
  }

  render() {
    const { targetKeys, selectedKeys } = this.state;
    const { label, help, name, checked, keys, provider, ...rest } = this.props;
    const keysmap = Object.assign({}, defaultKeysMap, keys);
    return (
      <Form.Item
        {...rest}
        label={renderLabel(label, help)}
        className={`clearfix transfer-input ${rest.className || ''}`}>
        <Field
          name={name}
          render={({ input }) => (
            <React.Fragment>
              <Transfer
                render={item => item.label}
                targetKeys={targetKeys}
                titles={['', 'Sélection']}
                selectedKeys={selectedKeys}
                onSelectChange={this.handleSelectChange}
                onChange={nextkeys => {
                  let updates = nextkeys.concat(checked);
                  updates = uniq(updates);
                  this.setState({ targetKeys: nextkeys });
                  input.onChange(updates);
                }}
                dataSource={provider.map(obj => ({
                  key: obj[keysmap.key],
                  label: obj[keysmap.label],
                }))}
              />
            </React.Fragment>
          )}
        />
      </Form.Item>
    );
  }
}

TransferInput.defaultProps = {
  help: null,
  keys: defaultKeysMap,
  label: null,
};

TransferInput.propTypes = {
  checked: PropTypes.array.isRequired,
  help: PropTypes.string,
  keys: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  provider: PropTypes.array.isRequired,
};

export default TransferInput;
