import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { getViewXapp } from "./App";
import { configureViewx } from "../util/config";
import { options as defaultOptions } from "../defaults/options";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const appOptions: any = { ...defaultOptions };
Enzyme.configure({ adapter: new Adapter() });
describe("getViewXapp", () => {
  beforeAll(async () => {
    appOptions.settings.router = "memory";
    appOptions.config = await configureViewx(appOptions);
  });
  it("renders without crashing", async () => {
    const {app:App} = await getViewXapp(appOptions);
    const div = document.createElement("div");
    ReactDOM.render(App, div);
    ReactDOM.unmountComponentAtNode(div);
    // return undefined;
  });
  it("should render VXA App", async () => {
    const renderOptions = {
      ...appOptions,
      vxaState: {
        views: {
          root: {
            jsonx: {
              component: "div",
              props: { key: 1 },
              children: "hello"
            }
          }
        }
      }
    };
    const {app:App} = await getViewXapp(renderOptions);
    const wrapper = render(App);
    expect(wrapper.html()).toEqual("hello");
  });
});
