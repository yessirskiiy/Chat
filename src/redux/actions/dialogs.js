import {dialogsApi} from "../../utils/api";

const Actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialogId: id => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: id
    }),
    updateReadedStatus: ({ userId, dialogId }) => ({
        type: 'DIALOGS:LAST_MESSAGE_READED_STATUS',
        payload: {
            userId,
            dialogId,
        },
    }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll().then(({data}) => {
            dispatch(Actions.setDialogs(data));
        });
    },
}

export default Actions;