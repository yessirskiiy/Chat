import React, { useEffect, useRef,useState} from 'react';
import {connect} from 'react-redux'
import {messagesActions} from "../redux/actions/";
import {Messages as BaseMessages} from '../components'
import socket from "../core/socket"

const Dialogs = ({
         fetchMessages,
         currentDialogId,
         items,
         isLoading,
         addMessage,
         user,
         removeMessageById,
    }) => {

    const [previewImage, setPreviewImage] = useState(null);

    const messagesRef =  useRef(null);

    const onNewMessage = data => {
        addMessage(data);
    };

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId)
        }
        socket.on('SERVER:NEW_MESSAGE', onNewMessage)

        return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage)
    }, [currentDialogId]);


    useEffect(() => {
        messagesRef.current.scrollTo(0,999999)
    },[items]);


    return  (
    <BaseMessages
        user={user}
        blockRef={messagesRef}
        items={items}
        isLoading={isLoading && !user}
        onRemoveMessage={removeMessageById}
        setPreviewImage={setPreviewImage}
        previewImage={previewImage}
    />
    );
};


export default connect(
    ({ dialogs , messages, user }) =>({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data
    }),
    messagesActions)
(Dialogs);