import React, {useEffect,Fragment} from 'react';
import PropTypes from "prop-types";
import './ChatInput.scss';
import {SendOutlined, SmileOutlined,AudioOutlined,PaperClipOutlined,DeleteOutlined} from "@ant-design/icons";
import {Input, Button} from "antd";
import Picker from '@emoji-mart/react'
import {UploadField} from "../../utils/helpers";
import UploadFiles from "../UploadFIles";



const ChatInput = props => {

    const {
        emojiPickerVisible,
        toggleEmojiPicker,
        addEmoji,
        handleSendMessage,
        setValue,
        value,
        sendMessage,
        attachments,
        onSelectFiles,
        removeAttachment,
        onRecord,
        isRecording,
        onStopRecording
    } = props;


    return(
        <Fragment>
            <div className="chat-input">
                <div>
                    <div className="chat-input_smile-btn">
                        {emojiPickerVisible && (
                            <div className="chat-input_emoji-picker">
                                <Picker onEmojiSelect={(emojiTag) => addEmoji(emojiTag)} set="apple" locale="ru" />
                            </div>
                        )}
                        <Button onClick={toggleEmojiPicker}
                                type="link"
                                shape="circle"
                                icon={<SmileOutlined />}
                        />
                    </div>
                    {isRecording ?(<div className="chat-input_record-status">
                            <i></i>
                            Recording...
                            <Button onClick={onStopRecording}
                                    type="link"
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                    className="stop-recording"
                            />
                        </div>
                    ) : (<Input
                        onChange= {e => setValue(e.target.value)}
                        onKeyUp={handleSendMessage}
                        size="large"
                        placeholder = "Введите текст сообщения"
                        value={value}
                    />)}
                    <div className="chat-input_actions">
                        {isRecording || value || attachments.length ?(
                                <Button
                                    onClick={sendMessage}
                                    type="link"
                                    shape="circle"
                                    icon={<SendOutlined />}
                                />
                        ) : (
                            <div className="chat-input_record-btn">
                            <Button
                                onClick={onRecord}
                                type="link"
                                shape="circle"
                                icon={<AudioOutlined />}
                            />
                        </div>
                        )}

                        <UploadField
                            onFiles={onSelectFiles}
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
                    <div className="chat-input_attachments">
                        <UploadFiles
                            attachments={attachments}
                            removeAttachment={removeAttachment}
                        />
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;