import React from "react";
import classNames from "classnames";


import './DialogItem.scss'

import format from 'date-fns/format'
import isToday from "date-fns/isToday";
import IconReaded from "../IconReaded";
import Avatar from "../Avatar";
import generateAvatarFromHash from "../../utils/helpers/generateAvatarFromHash"



const getMessageTime = (created_at)=>{
    if(isToday(new Date(created_at))){
        return format(new Date(created_at),'HH:mm')
    } else {
        return format(new Date(created_at),'dd.MM.yyyy')
    }
}





const DialogItem =(
    {
        user ,
        unreaded ,
        isMe ,
        created_at,
        text,
        currentDialogId,
        onSelect,
        _id }) =>
    (
            <div className={classNames('dialogs_item',{
                'dialogs_item-online':user.isOnline,
                "dialogs_item-selected" : currentDialogId === _id
            })}
            onClick={onSelect.bind(this, _id)}
            >
            <div className="dialogs_item-avatar"><Avatar user={user} /></div>
            <div className="dialogs_item-info">
                <div className="dialogs_item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className="dialogs_item-info-bottom">
                    <p>{text}
                    </p>
                    {isMe && <IconReaded isMe={true} isReaded={false}/>}
                    {unreaded > 0 && <div className='dialogs_item-info-bottom-count'>{unreaded > 9 ? "+9" : unreaded}</div>}
                </div>
            </div>
        </div>
    );

export default DialogItem;