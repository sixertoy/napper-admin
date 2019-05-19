import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal, Form } from 'antd';

import renderLabel from '../renderLabel';

export class PicturesInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderUploadButton = this.renderUploadButton.bind(this);
    this.state = {
      fileList: [],
      previewImage: '',
      previewVisible: false,
    };
  }

  handleCancel() {
    this.setState({ previewVisible: false });
  }

  handlePreview(file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange({ fileList }) {
    this.setState({ fileList });
  }

  renderUploadButton() {
    const { filetypes } = this.props;
    const types = Object.keys(filetypes).map(str => str.toLocaleUpperCase());
    return (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">{`${types.join(' | ')}`}</div>
      </div>
    );
  }

  render() {
    const { uri, label, help, ...rest } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    return (
      <Form.Item
        {...rest}
        label={renderLabel(label, help)}
        className={`clearfix pictures-input ${rest.className || ''}`}>
        <Upload
          action={uri}
          listType="picture-card"
          fileList={fileList}
          onChange={this.handleChange}
          onPreview={this.handlePreview}>
          {this.renderUploadButton()}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Form.Item>
    );
  }
}

PicturesInput.defaultProps = {
  filetypes: { jpeg: 'image/jpeg', png: 'image/png' },
  help: null,
};

PicturesInput.propTypes = {
  filetypes: PropTypes.object,
  help: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

export default PicturesInput;
