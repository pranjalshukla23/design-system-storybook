import { Chip } from "../components/Chip";
import {AiFillStar} from 'react-icons/ai'


//define a folder
export default {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'This is a chip component for UI',
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    style: {
      description: 'prop to style the chip component',
      defaultValue: {},
      table: {
        type: { 
          summary: 'object', 
        },
      },
    },
    ratingIcon: {
        description: 'icon to view in the chip component',
        table: {
          type: { 
            summary: 'ReactElement | ReactNode', 
          },
        },
        control: {
            type: null,
          },
      },

      color: {
        description: 'prop to set the color of chip',
        options: ['success', 'secondary', 'error', 'primary'],
        defaultValue:"primary",
        table: {
          type: { 
            summary: 'string', 
          },
        },
        control: {
          type: 'radio',
        },
      },

      label: {
        description: 'clickable',
        table: {
          type: { 
            summary: 'string', 
          
          },
        },
        control: {
          type: "text",
        },
      },

      size: {
        description: 'prop to set the siz of chip',
        defaultValue: "sm",
        options: ['sm', 'md', 'lg'],
        table: {
          type: { 
            summary: 'string', 
          },
        },
        control: {
          type: 'radio',
        },
      },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Chip {...args} />



//story #1 - Chip
//create story from a template
export const chip = Template.bind({});


//passing arguments to template component
chip.args = {

    ratingIcon: <AiFillStar color="gold"/>
}


//customize source code 
chip.parameters = {
  docs: {
    source: {
      code: 'import {Chip} from design-system-betaflux/Chip',
      language: "javascript",
      type: "auto",
    },
  },
};








