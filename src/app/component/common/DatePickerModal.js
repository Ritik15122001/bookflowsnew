// DatePickerModal.js

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerModal = ({ isOpen, onClose, selectedDate, handleDateChange }) => {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select a Date</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <DatePicker selected={selectedDate} className='date-picker'  onChange={handleDateChange} />
            
          </div>
          {/* You can add additional content or controls in the modal if needed */}
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
