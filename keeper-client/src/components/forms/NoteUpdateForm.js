import React from 'react';
import PropTypes from 'prop-types';

class NoteUpdateForm extends React.Component {

  state = {
    data: {}
  };

  componentWillMount() {
    this.setState({ data: { ...this.props.data, isPrivate: this.props.data.isPrivate.toString() }});
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
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
            type='text'
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
            type='text'
            id='body'
            name='body'
            rows='7'
            value={data.body}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='visibility'>Is private ?</label>
          <div className='form-check'>
            <label className='toggle'>
              <input type='radio' name='isPrivate' value='true' onChange={this.onChange} checked={data.isPrivate === 'true'}/>
              <span className='label-text'> yes </span>
            </label>
            <span> </span>
            <label className='toggle'>
              <input type='radio' name='isPrivate' value='false' onChange={this.onChange} checked={data.isPrivate === 'false'}/>
              <span className='label-text'> no</span>
            </label>
          </div>
        </div>
        <button type='submit' className='btn btn-info btn-lg'>Update</button>
      </form>
    );
  }
}

NoteUpdateForm.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired
};

export default NoteUpdateForm;
