import { useState } from "react";
import {Input} from "../components/Input";

//define a folder
export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'This is a input field component for UI',
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
      description: 'select the type of input field to render in the UI',
      table: {
        type: { 
          summary: 'string', 
        },
      },
      defaultValue: "outlined",
      options: ['standard', 'outlined', 'filled'],
      control: {
        type: "radio",
      },
    },
    type: {
      description: 'select the type of input field',
      table: {
        type: { 
          summary: 'string', 
        },
      },
      options: ['email', 'text', 'password', 'number'],
      control: {
        type: "select",
      },
    },
    size: {
      description: 'select the size of input field',
      table: {
        type: { 
          summary: 'string', 
        },
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: "radio",
      },
    },
    placeholder: {
      description: 'enter the placeholder for input field',
      table: {
        type: { 
          summary: 'string', 
        },
      },
    },
    fullWidth: {
      description: 'prop to set the width of input field to 100% of container',
      table: {
        type: { 
          summary: 'boolean', 
        },
      },
      options: [true, false],
      control: {
        type: "radio",
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
    onClick: {
      description: 'event to trigger on clicking the button',
      table: {
        type: { 
          summary: '((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)', 
        },
      },
    },
    setValue: {
      description: 'event to update the state to store in input field',
      table: {
        type: { 
          summary: '((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)', 
        },
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => {

  const [value, setValue] = useState("")

  return (
    <Input {...args} val={value} setValue={setValue}/>
  )
}

//story #1 - input
//create story from a template
export const input = Template.bind({});


//customize source code 
input.parameters = {
  docs: {
    source: {
      code: 'import Input from design-system-betaflux/Input/Input',
      language: "javascript",
      type: "auto",
    },
  },
};



