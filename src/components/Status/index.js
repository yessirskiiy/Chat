import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Popover } from 'antd';
import './Status.scss';
import {EllipsisOutlined} from "@ant-design/icons";

const Status = ({ online, fullname }) => (
    <div className="chat_dialog-header">
        <div className="chat_dialog-header-center">
            <b className="chat_dialog-header-username">{fullname}</b>
            <div className="chat_dialog-header-status">
        <span className={classNames('status', { 'status-online': online })}>
          {online ? 'online' : 'offline'}
        </span>
            </div>
        </div>
        <Popover
            className="chat_dialog-header-action"
            content={
                <div>
                    <Button>Удалить диалог</Button>
                </div>
            }
            trigger="click">
            <div>
                <Button type="link" shape="circle" icon={<EllipsisOutlined/>}/>
            </div>
        </Popover>
    </div>
);

Status.propTypes = {
    online: PropTypes.string,
};

export default Status;