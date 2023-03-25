import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

//define a folder
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "This is a checkbox field component for UI",
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    label: {
      description: "checkbox label",
      defaultValue: "Add to portfolio",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
    color: {
      description: "prop to set the color of checkbox",
      defaultValue: "outlined",
      options: ["primary", "secondary"],
      defaultValue: "primary",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "radio",
      },
    },
    style: {
      description: "prop to style the card component",
      defaultValue: {},
      table: {
        type: {
          summary: "object",
        },
      },
    },
    onChange: {
      description: "event to update the value to store in checkbox",
      table: {
        type: {
          summary: "((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)",
        },
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => {
  const [value, setValue] = useState("");

  return <Checkbox {...args} val={value} onChange={setValue} />;
};

//story #1 - input
//create story from a template
export const checkbox = Template.bind({});

//customize source code
checkbox.parameters = {
  docs: {
    source: {
      code: "import {Checkbox} from design-system-betaflux/Checkbox",
      language: "javascript",
      type: "auto",
    },
  },
};
