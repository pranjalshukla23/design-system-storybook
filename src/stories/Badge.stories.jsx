import { Badge } from "../components/Badge";
import { AiFillStar } from "react-icons/ai";

//define a folder
export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "This is a badge component for UI",
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    style: {
      description: "prop to style the chip component",
      defaultValue: {},
      table: {
        type: {
          summary: "object",
        },
      },
    },
    ratingIcon: {
      description: "icon to view in the chip component",
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

    color: {
      description: "prop to set the color of chip",
      options: ["success", "secondary", "error", "primary"],
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

    label: {
      description: "clickable",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Badge {...args} />;

//story #1 - Badge
//create story from a template
export const badge = Template.bind({});

//passing arguments to template component
badge.args = {
  ratingIcon: <AiFillStar color='gold' />,
};

//customize source code
badge.parameters = {
  docs: {
    source: {
      code: "import {Badge} from design-system-betaflux/Badge",
      language: "javascript",
      type: "auto",
    },
  },
};
