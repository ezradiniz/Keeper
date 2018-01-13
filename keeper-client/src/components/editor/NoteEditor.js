import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';

const toolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
  INLINE_STYLE_BUTTONS: [
    {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Strikethrough', style: 'STRIKETHROUGH'},
    {label: 'Monospace', style: 'CODE'}
  ],
  BLOCK_TYPE_DROPDOWN: [
    {label: 'Normal', style: 'unstyled'},
    {label: 'Heading Large', style: 'header-one'},
    {label: 'Heading Medium', style: 'header-two'},
    {label: 'Heading Small', style: 'header-three'}
  ],
  BLOCK_TYPE_BUTTONS: [
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Blockquote', style: 'blockquote'}
  ]
};

class NoteEditor extends React.Component {

  state = {
    value: RichTextEditor.createEmptyValue()
  };

  componentWillMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  onChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { onChange, ...rest } = this.props;

    return (
      <RichTextEditor
        {...rest}
        toolbarConfig={toolbarConfig}
        value={this.state.value}
        onChange={this.onChange}
        className='note-editor'
      />
    );
  }
}

NoteEditor.defaultProps = {
  value: undefined
};

NoteEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({})
};

export default NoteEditor;
