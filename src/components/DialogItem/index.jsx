import React from "react";
import classNames from "classnames";
import format from 'date-fns/format'
import isToday from "date-fns/is_today";
import {IconReaded,Avatar} from "../index";
import './DialogItem.scss'
import { Link } from "react-router-dom"



const getMessageTime = createdAt => {
    if (isToday(createdAt)) {
        return format(createdAt, "HH:mm");
    } else {
        return format(createdAt, "DD.MM.YYYY");
    }
};

const renderLastMessage = (message, userId) => {
    let text = '';
    if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogItem = ({
                        _id,
                        isMe,
                        currentDialogId,
                        lastMessage,
                        userId
}) => (
    <Link to={`/dialog/${_id}`}>
        <div
            className={classNames("dialogs_item", {
                "dialogs_item-online": lastMessage.user.last_seen,
                "dialogs_item-selected": currentDialogId === _id
            })}
        >
            <div className="dialogs_item-avatar">
                <Avatar user={lastMessage.user} />
            </div>
            <div className="dialogs_item-info">
                <div className="dialogs_item-info-top">
                    <b>{lastMessage.user.fullname}</b>
                    <span>{getMessageTime(lastMessage.createdAt)}</span>
                </div>
                <div className="dialogs_item-info-bottom">
                    <p>{renderLastMessage(lastMessage, userId)}</p>
                    {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.read} />}
                    {lastMessage.unreaded > 0 && (
                        <div className="dialogs_item-info-bottom-count">
                            {lastMessage.unreaded > 9 ? "+9" : lastMessage.unreaded}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Link>
);

export default DialogItem;