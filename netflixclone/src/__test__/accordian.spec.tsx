import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import faqData from "../fixtures/faqs.json";
import Accordian from "../components/Accordian";

describe("<Accordian />", () => {
  it("renders the <Accordian />", () => {
    const { container, getByText } = render(
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
      </Accordian>
    );

    expect(getByText(/Frequently/gi)).toBeTruthy();
    expect(getByText(/What is Netflix/gi)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("open and closes the <Accordian /> Component", () => {
    const { container, queryByText, debug } = render(
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
      </Accordian>
    );

    expect(queryByText(/netflix is a streaming/gi)).toBeFalsy();
    fireEvent.click(queryByText(/What is net/gi)!);
    expect(queryByText(/netflix is a streaming/gi)).toBeTruthy();
    fireEvent.click(queryByText(/What is net/gi)!);
    expect(queryByText(/netflix is a streaming/gi)).toBeFalsy();
  });
});
