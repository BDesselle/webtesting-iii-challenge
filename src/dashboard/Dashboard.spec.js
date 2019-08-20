import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
// Component
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders without issue", () => {
    render(<Dashboard />);
  });

  it("renders all children", () => {
    render(<Dashboard />);
    expect(document.querySelector(".controls")).toBeTruthy();
    expect(document.querySelector(".display")).toBeTruthy();
  });
});
