import { storiesOf } from "@storybook/react";
import * as React from "react";
import 'antd/dist/antd.css';
import { Button } from "../";

storiesOf("Button", module).add("All", () => (
  <div className="storycontainer">
    <div className="story-module spaced">
      <h3>Small Buttons</h3>
      <Button type="primary" size="small">
        CLICK ME
      </Button>
    </div>
  </div>
));
