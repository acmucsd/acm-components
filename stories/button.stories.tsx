import { storiesOf } from "@storybook/react";
import * as React from "react";
import 'antd/dist/antd.css';
import { Button } from "../components/Button";

storiesOf("Button", module).add("All", () => (
  <div className="storycontainer">
    <div className="story-module spaced" style={{backgroundColor:'rgba(10,190,240, 0.25)'}}>
      <h3>Small Buttons</h3>
      <Button type="primary" size="small">
        CLICK ME
      </Button>
      <Button type="outline" size="small">
        CLICK ME
      </Button>
      <h3>Medium Buttons</h3>
      <Button type="primary" size="medium">
        CLICK ME
      </Button>
      <Button type="outline" size="small">
        CLICK ME
      </Button>
      <h3>Large Buttons</h3>
      <Button type="primary" size="large">
        CLICK ME
      </Button>
      <Button type="outline" size="small">
        CLICK ME
      </Button>
    </div>
  </div>
));
