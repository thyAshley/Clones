import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/Form";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { FirebaseContext } from "../context/firebase";

import * as ROUTES from "../constant/routes";

const Signin: React.FC = () => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isInvalid = password === "" || email === "";
  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await firebase?.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="POST" onSubmit={handleSignin}>
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Password"
              value={password}
              type="password"
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              Don't have an account?
              <Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
