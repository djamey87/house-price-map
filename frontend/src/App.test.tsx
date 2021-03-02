import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow } from "enzyme";
import * as React from "react";
import App from "./App";

let mock: MockAdapter;
const mockItemsResponse = {
  min: 10000,
  max: 10000000,
  points: [
    { x: 10, y: 10, p: 150000 },
    { x: 20, y: 30, p: 150000 },
  ],
};

beforeEach(() => {
  mock = new MockAdapter(axios);
});

describe("App", () => {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (initState: any) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.skip("Should setData once loaded", () => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    const wrapper = shallow(<App />);
    // trigger setState somehow
    expect(setState).toHaveBeenCalledTimes(1);
    // Other tests here
  });
});
