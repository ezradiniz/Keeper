import React from 'react';
import {
  FormControl,
  FormGroup
} from 'react-bootstrap';

class SearchForm extends React.Component {

  state = {
    query: '',
  };

  onChange = e => {
    clearTimeout(this.timer);
    this.setState({ query: e.target.value });
    this.timer = setTimeout(() => {
      if (!this.state.query) return;
      /*
       * TODO: implement action search
       */
      console.log('NOTE IMPLEMENTED YET');
    }, 500);
  };

  render() {
    return (
      <FormGroup>
        <FormControl
          type='text'
          placeholder='Search'
          onChange={this.onChange}
        />
      </FormGroup>
    );
  }
}

export default SearchForm;
