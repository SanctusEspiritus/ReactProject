import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormElements/FormElements";
import { fieldIsRequired } from "../utilities/FormValidator";


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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;