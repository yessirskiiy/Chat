import React, {useEffect, useState} from 'react';
import {Result} from "antd";
import {Block,Button} from '../../../components'
import {userApi} from '../../../utils/api'



const renderTextInfo = (hash,verified) => {
    if(hash) {
        if(verified) {
            return {
                status: "success",
                message: "Аккаунт успешно подтверждён"
            }
        }else {
            return {
                status: "error",
                message: "Ошибка при подтверждении аккаунта"
            }
        }
    }else {
        return {
            status: "success",
            message: "На вашу почту отправлено письмо с подтверждением"
        }
    }
}

const CheckEmailInfo = ({location,history}) => {
    const hash  = location.search.split('hash=')[1]       //Решить почему не передаётся к пропу функция .search.split('hash=')[1]
    const [verified, setVerified] = useState(false);
    const info = renderTextInfo(hash,verified);

    useEffect(() =>{
        if (hash) {
            userApi
                .verifyHash(hash)
                .then(({data}) => {
                if (data.status === "success") {
                    setVerified(true)
                }
            });
        }
    })

    return (
        <div>
            <Block>
                <Result
                    status={info.status}
                    title={info.status === 'success' ? 'Готово' : 'Ошибка'}
                    subTitle={info.message}
                    extra={
                    info.status === 'success' && verified &&
                        <Button
                            type="primary"
                            onClick={() => history.push('/signin')}>
                            Войти
                        </Button>
                }
                />
            </Block>
        </div>
    );
};

export default CheckEmailInfo;