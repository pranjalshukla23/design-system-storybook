import { Typography } from "../components/Typography/Typography";

//define a folder
export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'This is a text component for the UI',
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
    variant: {
      description: 'select the size of text to render in the UI',
      defaultValue: "default",
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'default'],
      table: {
        type: { 
          summary: 'string', 
        },
      },
      control: {
        type: 'radio',
      },
    },
    style: {
      description: 'prop to style the component',
      defaultValue: {},
      table: {
        type: { 
          summary: 'object', 
        },
      },
    },

    "props.children": {
        description: 'children to render inside the card component',
        table: {
          type: {
            summary: "string"
          }
        },
        control: {
          type: null
        }
      },
    
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Typography {...args}>
    Hello World
    </Typography>;

//story #1 - Typography
//create story from a template
export const typography = Template.bind({});


//customize source code 
typography.parameters = {
  docs: {
    source: {
      code: 'import {Typography} from design-system-betaflux/Typography',
      language: "javascript",
      type: "auto",
    },
  },
};
