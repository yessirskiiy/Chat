import {userApi} from '../../utils/api';
import {openNotification} from "../../utils/helpers";


const Actions = {
    setUserData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    setIsAuth: bool => ({
        type: "USER:SET_IS_AUTH",
        payload: bool
    }),
    fetchUserData: () => dispatch => {
        userApi.getMe().then(({ data }) => {
            dispatch(Actions.setUserData(data));
        }).catch(err => {
            if(err.response.status === 403) {
                dispatch(Actions.setIsAuth(false))
                delete window.localStorage.token;
            }
        })
    },
    fetchUserRegister: postData => dispatch => {
        return userApi
            .signUp(postData)
            .then(({data}) => {
                openNotification({
                    text:"Регистрация прошла успешно",
                    type:"success"
                });
            return data;
        });
    },
    fetchUserLogin: postData => dispatch => {
        return userApi
            .signIn(postData)
            .then(({data}) => {
            const { token } = data;
                openNotification({
                    text:"Авторизация прошла успешно",
                    type:"success"
                });
                window.axios.defaults.headers.common["token"] = token;
                window.localStorage['token'] = token;
                dispatch(Actions.fetchUserData());
                dispatch(Actions.setIsAuth(true));
                return data;
        }).catch(({response}) => {
            if(response.status === 403) {
                openNotification({
                    title:"Ошибка при авторизации",
                    text:"Неверный логин или пароль",
                    type:"error"
                });
            } else
                openNotification({
                    title:"Ошибка при авторизации",
                    text:"Пользователь не найден",
                    type:"error"
            })
        })

    }
};

export default Actions;