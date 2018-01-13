import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormGroup
} from 'react-bootstrap';

class SearchForm extends React.Component {

  state = {
    query: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.query === 'ok') return;
    this.setState({ query: nextProps.query });
  }

  onChange = e => {
    clearTimeout(this.timer);
    this.setState({ query: e.target.value });
    this.timer = setTimeout(() => {
      this.props.submit(this.state.query);
      this.props.history.push('/search')
    }, 500);
  };

  render() {
    return (
      <FormGroup>
        <FormControl
          type='text'
          placeholder='Search'
          value={this.state.query}
          onChange={this.onChange}
        />
      </FormGroup>
    );
  }
}

SearchForm.defaultProps = {
  query: ''
};

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
  query: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default SearchForm;
