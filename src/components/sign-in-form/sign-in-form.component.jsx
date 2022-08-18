import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import { 
    signInWithFormInput,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithFormInput(email, password);
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('user does not exist');
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const signInWithRedirect = async () => {
        await signInWithGoogleRedirect();
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email,
                    }} 
                />

                <FormInput
                    label="Password" 
                    inputOptions={{
                        type: "password",
                        required: true, 
                        onChange: handleChange,
                        name: "password",
                        value: password,
                    }}
                />
                <div className="submit-buttons">
                    <Button type="submit"
                    >
                        Sign In
                    </Button>
                    <Button type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                    </Button>
                </div>
                <Button 
                    buttonType="google" 
                    onClick={signInWithRedirect}
                    style={{width: "100%", marginTop: "20px"}}
                >
                    Sign in with Google Redirect
                </Button>
            </form>
        </div>
    )
}

export default SignInForm;
