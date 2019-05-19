import React from 'react';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import { Field } from 'react-final-form';
import { Button, Icon, Form } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromMarkdown } from 'draft-js-import-markdown';

import renderLabel from '../renderLabel';

/* ------------------------------------------------------------

 MARKDOWN EDITOR COMPONENT

------------------------------------------------------------ */

const setEditorState = value => {
  const rawvalue = value || '';
  const content = stateFromMarkdown(rawvalue);
  return EditorState.createWithContent(content);
};

const getRawContent = editorState => {
  const content = editorState.getCurrentContent();
  const rawvalue = stateToMarkdown(content);
  return rawvalue;
};

const editorToolbar = {
  blockType: {
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
  },
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough'],
  },
  options: ['inline', 'blockType'],
};

export class MarkdownEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.editorReference = null;
    this.showEditor = this.showEditor.bind(this);
    this.showPreview = this.showPreview.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    const rawvalue = props.input.value || '';
    this.state = {
      editorState: setEditorState(rawvalue),
      preview: true,
      rawvalue,
    };
  }

  componentWillReceiveProps(next) {
    const { rawvalue } = this.state;
    if (next.input.value === rawvalue) return;
    const nextrawvalue = next.input.value || '';
    this.setState({
      editorState: setEditorState(rawvalue),
      rawvalue: nextrawvalue,
    });
  }

  onEditorStateChange(editorState) {
    const { input } = this.props;
    const rawvalue = getRawContent(editorState);
    this.setState({ editorState, rawvalue }, () => input.onChange(rawvalue));
  }

  showEditor() {
    this.setState({ preview: false });
  }

  showPreview() {
    this.setState({ preview: true });
  }

  render() {
    const { disabled, label, help } = this.props;
    const { preview, rawvalue, editorState } = this.state;
    const editcss = (!preview && 'active') || '';
    const previewcss = (preview && 'active') || '';
    return (
      <div className="markdown-editor">
        <div className="markdown-editor-container">
          <div className="markdown-editor-header flex-columns flex-between">
            <Form.Item label={renderLabel(label, help)} />
            <Button.Group className="markdown-editor-nav">
              <Button
                htmlType="button"
                onClick={this.showPreview}
                className={`${previewcss}`}
                type={preview ? 'default' : 'primary'}>
                <Icon type="edit" />
              </Button>
              <Button
                htmlType="button"
                onClick={this.showEditor}
                className={`${editcss}`}
                type={!preview ? 'default' : 'primary'}>
                <Icon type="code" />
              </Button>
            </Button.Group>
          </div>
          <div className="markdown-editor-views">
            <div
              className={`markdown-editor-preview ${previewcss}`}
              style={{ display: (preview && 'block') || 'none' }}>
              <Editor
                readOnly={disabled}
                toolbar={editorToolbar}
                editorState={editorState}
                editorClassName="markdown-draft-editor"
                wrapperClassName="markdown-draft-wrapper"
                toolbarClassName="markdown-draft-toolbar"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            <div
              className={`markdown-editor-raw ${editcss}`}
              style={{ display: (preview && 'none') || 'block' }}>
              <textarea
                disabled
                value={rawvalue}
                style={{
                  height: '180px',
                  resize: 'none',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MarkdownEditor.defaultProps = {
  disabled: false,
  help: 'Vous pouvez ajouter plusieurs valeurs en les séparant par une virgule',
  label: null,
};

MarkdownEditor.propTypes = {
  disabled: PropTypes.bool,
  help: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
};

/* ------------------------------------------------------------

 INPUT ENTRY POINT / MAIN COMPONENT

------------------------------------------------------------ */

export const MarkdownInput = ({ name, label, ...rest }) => {
  const classname = `markdown-input my12 ${rest.className || ''}`;
  return (
    <div className={classname}>
      <Field
        {...omit(rest, ['className', 'inline'])}
        id={name}
        name={name}
        label={label}
        component={MarkdownEditor}
      />
    </div>
  );
};

MarkdownInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MarkdownInput;
