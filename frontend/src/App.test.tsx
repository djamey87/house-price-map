import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow } from "enzyme";
import * as React from "react";
import App, { AppState } from "./App";

let mock: MockAdapter;
const mockItemsResponse = [{ x: 10, y: 10, p: 150000 }];

beforeEach(() => {
  mock = new MockAdapter(axios);
  localStorage.clear();
});

it("can get data", done => {
  mock.onGet("/api/points").reply(200, mockItemsResponse);
  const wrapper = shallow<AppState>(<App />);
  wrapper.find("button[children='Get test data']").simulate("click");
  setImmediate(() => {
    expect(wrapper.state().data).toEqual(mockItemsResponse);
    done();
  });
});

it("can catch data errors", done => {
  mock.onGet("/api/points").reply(400);
  const wrapper = shallow<AppState>(<App />);
  wrapper.setState({ isLoggedIn: true });
  wrapper.find("button[children='Get test data']").simulate("click");
  setImmediate(() => {
    expect(wrapper.state().error).toBe("Something went wrong");
    done();
  });
});
