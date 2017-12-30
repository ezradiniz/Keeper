import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import NoteForm from '../forms/NoteForm';
import { connect } from 'react-redux';
import { create, update, detachCurrent } from '../../actions/note';
import onClickOutside from 'react-onclickoutside';
import { currentNoteSelector } from '../../reducers/note';

bootstrapUtils.addStyle(Button, 'note');

class NotePageContainer extends React.Component {

  state = {
    focus: false,
    note: {}
  };

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.currentNote).length !== 0) {
      window.scrollTo(0, 0);
      this.setState({ focus: true, note: nextProps.currentNote });
    }
  }

  handleClick = () => this.setState({ focus: true });

  handleClickOutside = e => {
    if (e) {
      this.props.detachCurrent();
      this.setState({ focus: false, note: {} });
    }
  };

  handleSubmitCreate = data => this.props.create(data).then(() => {
    this.props.message('New note has been added', { type: 'success' });
  });

  handleSubmitUpdate = data => this.props.update(data).then(() => {
    this.props.message('Note has been updated', { type: 'success' });
  });

  render() {
    const { focus, note } = this.state;
    const { updateOnly } = this.props;

    return (
      <div>
        {!focus && !updateOnly &&
            <div className='text-center'>
              <Button
                onClick={this.handleClick}
                bsStyle='note'
                bsSize='large'
              >
                New
              </Button>
            </div>
        }
          {focus &&
            <NoteForm
              submit={Object.keys(note).length !== 0 ? this.handleSubmitUpdate : this.handleSubmitCreate}
              data={Object.keys(note).length !== 0 ? note : null}
              btnText={Object.keys(note).length !== 0 ? 'Update': 'Add'}
            />
          }
      </div>
    );
  }
}

NotePageContainer.propTypes = {
  update: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  message: PropTypes.func.isRequired,
  detachCurrent: PropTypes.func.isRequired,
  currentNote: PropTypes.object.isRequired,
  updateOnly: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    currentNote: currentNoteSelector(state)
  };
}

export default connect(mapStateToProps, { create, update, detachCurrent })(onClickOutside(NotePageContainer));
