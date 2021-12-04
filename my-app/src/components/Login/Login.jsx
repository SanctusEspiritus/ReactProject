import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormElements/FormElements";
import { fieldIsRequired } from "../utilities/FormValidator";
import { loginIn } from "../../redux/auth-reducer"
import { Redirect } from "react-router";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={"login"} component={Input} validate={fieldIsRequired}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={Input} validate={fieldIsRequired}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} validate={fieldIsRequired}/> remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginIn(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profiles"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapDispatchToProps, {loginIn})(Login);