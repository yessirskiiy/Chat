import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin, Modal } from 'antd';
import classNames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons';

import'./Messages.scss'
import {Message} from "../index";


const SpinLoading = <LoadingOutlined spin  />;

const Messages = ({
                      blockRef,
                      isLoading,
                      items,
                      user,
                      onRemoveMessage,
                      setPreviewImage,
                      previewImage
}) => {
        return (
            <div className="chat_dialog-messages" ><div
                ref={blockRef}
                 className={classNames("messages", {'messages--loading': isLoading})}
            >
                {isLoading  ? (
                        <Spin indicator={SpinLoading} size="large" tip="Загрузка сообщений"/>
                    ) : items && !isLoading && items.length > 0 ?  (
                    items.map(item =>(
                        <Message
                            setPreviewImage={setPreviewImage}
                            key={item._id}
                            {...item}
                            isMe={user._id === item.user._id}
                            onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                        />
                    ))
                    ) : (<Empty description="Нет сообщений"/>
                    )}
                <Modal open={!!previewImage} onCancel={() => setPreviewImage(null)} footer={null}>
                    <img src={previewImage} style={{ width: '100%' }} alt="Preview" />
                </Modal>
            </div>
        </div>

        );
};



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;