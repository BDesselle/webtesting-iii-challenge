import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
// Component
import Dashboard from "../dashboard/Dashboard";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
