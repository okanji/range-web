import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button, Form, TextArea } from 'semantic-ui-react';
import { NUMBER_OF_LIMIT_FOR_NOTE } from '../../constants/variables';
import { isNoteRequired, findStatusWithCode } from '../../utils';
import { InvertedButton } from '../common';

class UpdateStatusModal extends Component {
  static propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    statusCode: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    planUpdated: PropTypes.func.isRequired,
    planStatusHistoryRecordAdded: PropTypes.func.isRequired,
  }

  static defaultProps = {
    header: '',
    content: '',
    statusCode: '',
  }

  state = {
    note: '',
  }

  onNoteChange = (e, { value: note }) => {
    if (note.length <= NUMBER_OF_LIMIT_FOR_NOTE) {
      this.setState({ note });
    }
  }

  onSubmit = () => {
    const { statusCode } = this.props;
    this.updateStatus(statusCode);
  }

  updateStatus = async (statusCode) => {
    const {
      plan,
      references,
      updateRUPStatus,
      planUpdated,
      planStatusHistoryRecordAdded,
      createRUPStatusRecord,
      onClose,
    } = this.props;
    const { note } = this.state;
    const requireNote = isNoteRequired(statusCode);

    onClose();
    const status = findStatusWithCode(references, statusCode);
    const { id: planId, planStatusHistory } = plan;

    try {
      const newStatus = await updateRUPStatus(planId, status.id);
      const newPlan = {
        ...plan,
        status: newStatus,
      };
      planUpdated({ plan: newPlan });

      if (requireNote && note) {
        const record = await createRUPStatusRecord(plan, newStatus, note);
        planStatusHistoryRecordAdded({
          planId,
          record,
          planStatusHistory: [record.id, ...planStatusHistory],
        });
      }
    } catch (err) {
      throw err;
    }
  }

  render() {
    const { note } = this.state;
    const {
      header,
      content,
      onClose,
      open,
      statusCode,
    } = this.props;
    const lengthOfNote = note
      ? `${note.length}/${NUMBER_OF_LIMIT_FOR_NOTE}`
      : `0/${NUMBER_OF_LIMIT_FOR_NOTE}`;
    const requireNote = isNoteRequired(statusCode);

    return (
      <Modal
        dimmer="blurring"
        size="tiny"
        open={open}
        onClose={onClose}
        closeIcon={<Icon name="close" color="black" />}
      >
        <Modal.Header as="h2" content={header} />
        <Modal.Content>
          <div className="rup__update-status-modal__content">{content}</div>
          {requireNote &&
            <div className="rup__update-status-modal__note">
              Add Note ({NUMBER_OF_LIMIT_FOR_NOTE} characters).
              <Form>
                <TextArea
                  placeholder="Add notes here"
                  onChange={this.onNoteChange}
                  value={note}
                />
              </Form>
              <div className="rup__update-status-modal__note__text-length">
                {lengthOfNote}
              </div>
            </div>
          }
          <div className="rup__update-status-modal__btns">
            <InvertedButton
              primaryColor
              onClick={onClose}
            >
              <Icon name="remove" />
              Cancel
            </InvertedButton>
            <Button
              primary
              style={{ marginLeft: '15px', marginRight: '0' }}
              onClick={this.onSubmit}
              disabled={requireNote && !note}
            >
              <Icon name="checkmark" />
              Confirm
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default UpdateStatusModal;
