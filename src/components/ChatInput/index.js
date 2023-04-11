import React, {useState} from 'react';
import PropTypes from "prop-types";

import './ChatInput.scss';
import {SendOutlined, SmileOutlined,CameraOutlined,AudioOutlined,PaperClipOutlined,} from "@ant-design/icons";
import {Input, Button} from "antd";
import Picker from '@emoji-mart/react'
import {UploadField} from "../../utils/helpers";


const ChatInput = props => {
    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState('');

    const toggleEmojiPicker =() => {
        setShowEmojiPicker(!emojiPickerVisible)
    };

    return(
        <div className="chat-input">
            <div className="chat-input_smile-btn">

                {emojiPickerVisible && (
                    <div className="chat-input_emoji-picker">
                        <Picker  set="apple"/>
                    </div>
                )}

                <Button
                    onMouseEnter={toggleEmojiPicker}
                    type="link"
                    shape="circle"
                    icon={<SmileOutlined />}/>
            </div>

            <Input onChange= {e => setValue(e.target.value)}
                   size="large"
                   placeholder = "Введите текст сообщения"/>
            <div className="chat-input_actions">
                {value ?(
                    <Button type="link" shape="circle" icon={<SendOutlined />}/>
                    ) : (
                    <Button type="link" shape="circle" icon={<AudioOutlined />}/>
                )}
                <UploadField

                    onFiles={files =>(files)}
                    containerProps={{
                        className: "chat-input_actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif",
                        multiple: "multiple"
                    }}
                >
                    <Button type="link" shape="circle" icon={<PaperClipOutlined />} />

                </UploadField>

            </div>
        </div>
    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;