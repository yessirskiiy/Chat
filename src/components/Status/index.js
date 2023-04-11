import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './Status.scss';

const Status = ({ online, }) => (
    <div className="chat_dialog-header">
        <span className={classNames('status', { 'status-online': online })}>
          {online ? 'online' : 'offline'}
        </span>
            </div>

);

Status.propTypes = {
    online: PropTypes.bool,
};

export default Status;