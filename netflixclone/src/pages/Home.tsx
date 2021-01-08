import React from "react";

import FooterContainer from "../containers/FooterContainer";
import JumbtronContainer from "../containers/JumbotronContainer";
import FaqContainer from "../containers/FaqContainer";
import HeaderContainer from "../containers/HeaderContainer";
import Feature from "../components/Feature";
import OptForm from "../components/OptForm";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV Programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create o r restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbtronContainer />
      <FooterContainer />
      <FaqContainer />
    </>
  );
};

export default Home;
