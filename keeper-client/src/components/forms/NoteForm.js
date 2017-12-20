import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {

  state = {
    data: {
      subject: '',
      body: ''
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.data).then(() => this.setState({
      data: { subject: '', body: '' }
    }));
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor='subject'>Subject</label>
          <input
            type='subject'
            id='subject'
            name='subject'
            value={data.subject}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='body'>Body</label>
          <textarea
            type='body'
            id='body'
            name='body'
            rows='7'
            value={data.body}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>Add</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default NoteForm;
