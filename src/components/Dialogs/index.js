import React from 'react';
import orderBy from "lodash/orderBy";

import './Dialogs.scss'
import DialogItem from "../DialogItem/index";

import {Input, Empty,} from "antd";




const Dialogs = ({
                     items,
                     userId,
                     onSearch,
                     inputValue,
                     currentDialogId,
                 }) => (
    <div className='dialogs'>
        <div className="dialogs_search">
            <Input.Search
                placeholder = "Search"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            >
            </Input.Search>
        </div>
        {items.length ? (
            orderBy (items, ["created_at"], ["desc"]).map(item =>(
                <DialogItem
                    user={item.user}
                    currentDialogId={currentDialogId}
                    {...item}
                    unreaded={0}
                    key={item._id}
                    isMe={item.author._id === userId}
                />
            ))
            ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Нет диалога' />
        )}
    </div>

);

export default Dialogs;