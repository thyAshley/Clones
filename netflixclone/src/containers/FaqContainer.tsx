import React from "react";

import Accordian from "../components/Accordian";
import OptForm from "../components/OptForm";
import faqData from "../fixtures/faqs.json";

const FaqContainer = () => {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      <Accordian.Frame>
        {faqData.map((faq) => (
          <Accordian.Item>
            <Accordian.Header>{faq.header}</Accordian.Header>
            <Accordian.Body>{faq.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordian>
  );
};

export default FaqContainer;
