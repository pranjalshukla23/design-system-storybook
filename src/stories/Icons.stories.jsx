import { Icons } from "../components/Icons";

//define a folder
export default {
  title: "Components/Icons",
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: "List out the icons available in the design system",
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {},
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Icons {...args} />;

//story #1 - Icons
//create story from a template
export const icons = Template.bind({});

//customize source code
icons.parameters = {
  docs: {
    source: {
      code: "",
      language: "javascript",
      type: "auto",
    },
  },
};
