import React from "react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => React.createElement(Button, args);

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
};
