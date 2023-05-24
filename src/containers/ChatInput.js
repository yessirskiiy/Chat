import React, {useState,useEffect} from 'react';
import {ChatInput as ChatInputBase} from "../components";
import {connect} from "react-redux";
import {messagesActions,attachmentsActions} from "../redux/actions";
import {filesApi} from "../utils/api";

const ChatInput = ({ fetchSendMessage, currentDialogId,removeAttachment,}) => {
    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState([])
    const [isRecording, setIsRecording] =useState("")
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const [isLoading, setLoading] = useState(false);

    window.navigator.getUserMedia =
        window.navigator.getUserMedia ||
        window.navigator.mozGetUserMedia ||
        window.navigator.msGetUserMedia ||
        window.navigator.webkitGetUserMedia;

    const onRecord = () => {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({audio:true}, onRecording ,onError)
        }
    }

    const onRecording = stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();

        recorder.onstart = () => {
            setIsRecording(true);
        };

        recorder.onstop = () => {
            setIsRecording(false);
        };

        recorder.ondataavailable = e => {
            const file = new File([e.data], 'audio.webm');
            setLoading(true);
            filesApi.upload(file).then(({ data }) => {
                sendAudio(data.file._id).then(() => {
                    setLoading(false);
                });
            });
        };
    };

    const onError = err => {
        console.log('The following error occurred: ' + err);
    };

    const sendAudio = audioId => {
        return fetchSendMessage({
            text: null,
            dialogId: currentDialogId,
            attachments: [audioId],
        });
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleOutsideClick = (el, e) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    const addEmoji = ({ native }) => {
        setValue((value + " " + native).trim())
    };

    const sendMessage = () => {
        if (isRecording) {
            mediaRecorder.stop();
        } else if (value || attachments.length) {
            fetchSendMessage({
                text: value,
                dialogId: currentDialogId,
                attachments: attachments.map(file => file.uid),
            });
            setValue('');
            setAttachments([]);
        }
    };

    const handleSendMessage = e => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    const onStopRecording = () => {
        mediaRecorder.stop()
    }

    const onHideRecording = () => {
        setIsRecording(false);
    };

    const onSelectFiles = async files => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round(Math.random() * 1000);
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading',
                },
            ];
            setAttachments(uploaded);
            // eslint-disable-next-line no-loop-func
            await filesApi.upload(file).then(({ data }) => {
                uploaded = uploaded.map(item => {
                    if (item.uid === uid) {
                        return {
                            status: 'done',
                            uid: data.file._id,
                            name: data.file.filename,
                            url: data.file.url,
                        };
                    }
                    return item;
                });
            });
        }
        setAttachments(uploaded);
    };

    useEffect(() => {
        const el = document.querySelector('.chat-input_smile-btn');
        document.addEventListener('click', handleOutsideClick.bind(this, el));
        return () => {
            document.removeEventListener('click', handleOutsideClick.bind(this, el));
        };
    }, []);

    if (!currentDialogId) {
        return null
    }
    return (
        <ChatInputBase
            value={value}
            setValue={setValue}
            emojiPickerVisible={emojiPickerVisible}
            handleOutsideClick={handleOutsideClick}
            toggleEmojiPicker={toggleEmojiPicker}
            addEmoji={addEmoji}
            handleSendMessage={handleSendMessage}
            currentDialogId={currentDialogId}
            sendMessage={sendMessage}
            attachments={attachments}
            onSelectFiles={onSelectFiles}
            removeAttachment={removeAttachment}
            isRecording={isRecording}
            onRecord={onRecord}
            onHideRecording={onHideRecording}
            onStopRecording={onStopRecording}
        />
    );
};

export default connect(
    ({ dialogs }) => dialogs,
    messagesActions,
)(ChatInput);