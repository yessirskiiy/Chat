import {dialogsApi} from "../../utils/api";

const actions = {

    fetchDialogs: () => dispatch => {
        dialogsApi.getAll().then(({data}) => {
            dispatch(actions.setDialogs(data));
        });
    },

    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),

    setCurrentDialogId: id => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: id
    }),

}

export default actions;