import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/Form";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { FirebaseContext } from "../context/firebase";

import * as ROUTES from "../constant/routes";

const Signout = () => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isInvalid = password === "" || firstName === "" || email === "";
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await firebase
        ?.auth()
        .createUserWithEmailAndPassword(email, password);
      await response?.user?.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5).toString(),
      });
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="POST" onSubmit={handleSignup}>
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Already a user?
              <Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
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

export default Signout;
