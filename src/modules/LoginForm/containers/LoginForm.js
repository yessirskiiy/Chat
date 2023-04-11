import LoginForm from '../components/LoginForm';
import {withFormik} from "formik";
import validateForm from '../../../utils/validate'

export default withFormik({
    mapPropsToValues: () =>({email: ''}),
    validate : values =>{

        let errors = {};
        validateForm({isAuth: true, errors, values});
        return errors;
    },

    handleSubmit: (values ,{ setSubmitting }) =>{
        setTimeout(()=>{
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName:"LoginForm"
})(LoginForm);
