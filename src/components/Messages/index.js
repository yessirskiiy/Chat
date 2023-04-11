import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons';

import'./Messages.scss'
import {Message} from "../index";


const SpinLoading = <LoadingOutlined spin  />;

const Messages = ({blockRef,isLoading, items }) => {
        return (
            <div
                ref={blockRef}
                 className={classNames("messages", {'messages--loading': isLoading})}
            >
                {isLoading  ? (
                        <Spin indicator={SpinLoading} size="large" tip="Загрузка сообщений"/>
                    ) : items && !isLoading && items.length > 0 ?  (
                    items.map(item => <Message key={item._id} {...item} />)
                    ) : (<Empty description="Нет сообщений"/>
                    )
                }
            </div>

        );
};



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;