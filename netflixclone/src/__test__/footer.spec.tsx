import React from "react";
import { render } from "@testing-library/react";
import FooterContainer from "../containers/FooterContainer";

describe("<Footer/>", () => {
  it("should render the footer with populated data", () => {
    const { container, getByText, queryByTestId, getAllByRole } = render(
      <FooterContainer />
    );
    expect(getByText("Questions? Contact us.")).toBeTruthy();
    expect(getByText("Help Centre")).toBeTruthy();
    expect(getByText("Account")).toBeTruthy();
    expect(getAllByRole("link")).toHaveLength(17);
  });
});
