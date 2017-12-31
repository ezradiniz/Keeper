import React from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Radio,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import PropTypes from 'prop-types';
import NoteEditor from '../editor/NoteEditor';
import RichTextEditor from 'react-rte';

bootstrapUtils.addStyle(Button, 'note');

class NoteForm extends React.Component {

  state = {
    data: {
      subject: '',
      body: RichTextEditor.createEmptyValue(),
      isPrivate: 'true'
    },
    errors: {}
  };

  componentWillMount() {
    if (this.props.data) {
      this.setState({
        data: {
          ...this.props.data,
          isPrivate: this.props.data.isPrivate.toString(),
          body: RichTextEditor.createValueFromString(this.props.data.body, 'html')
        }
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props
      .submit({
        ...this.state.data,
        body: this.state.data.body.toString('html')
      })
      .catch(err => this.setState({ errors: err }));
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validate = data => {
    const errors = {};
    if (data.body.length === 0) {
      errors.body = 'Can not be blank';
    }
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <Form horizontal onSubmit={this.onSubmit}>
        <FormGroup controlId='formSubject'>
          <Col md={12}>
            <FormControl
              type='text'
              name='subject'
              placeholder='Title'
              defaultValue={data.subject}
              onChange={this.onChange}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId='formBody'>
          <Col md={12}>
            <NoteEditor
              value={data.body}
              placeholder='Message'
              onChange={(value) => this.setState({ data: { ...this.state.data, body: value } })}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId='formPrivate'>
          <Col componentClass={ControlLabel} md={2}>
            Visibility:
          </Col>
          <Col md={4}>
            <Radio
              name='isPrivate'
              onChange={this.onChange}
              value='true'
              checked={data.isPrivate === 'true'}
              inline
            >
              Private
            </Radio>
            <Radio
              name='isPrivate'
              onChange={this.onChange}
              value='false'
              checked={data.isPrivate === 'false'}
              inline
            >
              Public
            </Radio>
          </Col>
        </FormGroup>
        <div className='text-center'>
          <Button bsStyle='note' type='submit' bsSize='large'>
            {this.props.btnText}
          </Button>
        </div>
        {errors.message && <Alert bsStyle='danger'>{errors.message}</Alert>}
      </Form>
    );
  }
}

NoteForm.propTypes = {
  submit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired
};

NoteForm.defaultProps = {
  btnText: 'Add'
};

export default NoteForm;
