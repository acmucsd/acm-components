import { storiesOf } from "@storybook/react";
import * as React from "react";
import 'antd/dist/antd.css';
import { Input as AntdInput } from "antd";

storiesOf("Input", module).add("All", () => (
  <div className="storycontainer">
    <div className="story-module spaced" style={{backgroundColor:'rgba(10,190,240, 0.25)'}}>
      <div style={{width: '500px', marginLeft: '50px'}}>
        <h3>Input</h3>
        <AntdInput />
      </div>
    </div>
  </div>
));
