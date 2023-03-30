import { Button } from "../components/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import arrowIcon from "../images/arrow.svg";

//define a folder
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "This is a button component for UI",
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    // label: {
    //   description: 'text to display',
    //   table: {
    //     type: {
    //       summary: 'something short',
    //       detail: 'something really really long'
    //     },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    label: {
      description: "button label",
      table: {
        type: {
          summary: "submit",
        },
      },
      control: {
        type: null,
      },
    },
    size: {
      description: "prop to set the size of button",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "radio",
      },
    },
    color: {
      description: "prop to set the color of button",
      options: ["success", "secondary", "error", "primary", "default"],
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
      description: "prop to style the button component",
      defaultValue: {},
      table: {
        type: {
          summary: "object",
        },
      },
    },
    icon: {
      description: "icon to view in the button component",
      table: {
        type: {
          summary: "ReactElement | ReactNode",
        },
      },
      control: {
        type: null,
      },
    },
    placeIcon: {
      description: "prop to set the position of icon",
      options: ["left", "right", "hidden"],
      defaultValue: "right",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "radio",
      },
    },
    onClick: {
      description: "event to trigger on clicking the button",
      table: {
        type: {
          summary: "((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)",
        },
      },
    },

    onMouseOver: {
      description: "event to trigger on hovering over the mouse",
      table: {
        type: {
          summary: "((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)",
        },
      },
    },
    onMouseOut: {
      description: "event to trigger on taking the cursor out over the mouse",
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
const Template = (args) => <Button {...args} />;

//story #1 - button
//create story from a template
export const button = Template.bind({});

//passing arguments to template component
button.args = {
  icon: <img src={arrowIcon} alt='arrow' />,
};

//customize source code
button.parameters = {
  docs: {
    source: {
      code: "import Button from design-system-betaflux/Button/Button",
      language: "javascript",
      type: "auto",
    },
  },
};
