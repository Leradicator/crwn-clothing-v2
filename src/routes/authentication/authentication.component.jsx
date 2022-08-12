import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }

  }, []);
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
