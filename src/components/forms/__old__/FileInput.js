import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Upload, Icon, Form, message } from 'antd';

import renderLabel from '../renderLabel';

export class FileInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
    this.renderUploadButton = this.renderUploadButton.bind(this);
  }

  beforeUpload(file) {
    const { filetypes, maxsize } = this.props;
    const allowed = Object.values(filetypes).includes(file.type);
    if (!allowed) {
      message.error('You can only upload JPG file!');
    }
    const octets = 1024;
    const isLt2M = file.size / octets / octets <= maxsize;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return allowed && isLt2M;
  }

  handleChange(input) {
    return info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        input.onChange(info.file.response.uri);
      }
    };
  }

  renderUploadButton() {
    const { loading } = this.state;
    const { filetypes } = this.props;
    const types = Object.keys(filetypes).map(str => str.toLocaleUpperCase());
    return (
      <div>
        <Icon type={(loading && 'loading') || 'plus'} />
        <div className="ant-upload-text">
          {(loading && 'loading...') || `${types.join(' | ')}`}
        </div>
      </div>
    );
  }

  render() {
    const { img } = this.state;
    const { name, uri, type, help, label, ...rest } = this.props;
    return (
      <Form.Item
        {...rest}
        label={renderLabel(label, help)}
        className={`clearfix file-input ${rest.className || ''}`}>
        <Field
          name={name}
          render={({ input }) => {
            const source = (input && input.value) || null;
            return (
              <Upload
                showUploadList={false}
                name="file"
                action={uri}
                listType="picture-card"
                className={`${type}-uploader`}
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange(input)}>
                {source && <img src={source} alt="file" />}
                {!source && this.renderUploadButton()}
              </Upload>
            );
          }}
        />
      </Form.Item>
    );
  }
}

FileInput.defaultProps = {
  filetypes: { jpeg: 'image/jpeg', png: 'image/png' },
  help: null,
  label: null,
  maxsize: 2,
  type: 'thumb',
};

FileInput.propTypes = {
  filetypes: PropTypes.object,
  help: PropTypes.string,
  label: PropTypes.string,
  maxsize: PropTypes.number,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  uri: PropTypes.string.isRequired,
};

export default FileInput;
