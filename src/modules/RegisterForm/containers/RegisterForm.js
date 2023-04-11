import RegisterForm from '../components/RegisterForm';
import {withFormik} from "formik";
import validateForm from '../../../utils/validate'

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () =>({
        email: "",
        fullname: "",
        password: "",
        password_2: ""

    }),
    validate : values =>{

        let errors = {};
        validateForm({isAuth: false , errors , values});
        return errors;
    },

    handleSubmit: (values ,{ setSubmitting }) =>{
        setTimeout(()=>{
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName:"RegisterForm"
})(RegisterForm);
