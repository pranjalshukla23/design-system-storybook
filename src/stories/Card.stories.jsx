import {Card} from "../components/Card";

const user =  {
        id: 1,
        name: "Steve Jobs",
        img: "https://www.enrichwise.com/wp-content/uploads/2019/03/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat magni ad ipsa voluptas deserunt, vero nesciunt ab minus culpa."
    }

//define a folder
export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'This is a card component for UI',
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    "props.children": {
      description: 'children to render inside the card component',
      table: {
        type: {
          summary: "ReactChild | ReactFragment | ReactPortal | boolean | null | undefined"
        }
      },
      control: {
        type: null
      }
    },
    style: {
      description: 'prop to style the card component',
      defaultValue: {},
      table: {
        type: { 
          summary: 'object', 
        },
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Card {...args}>
<h1 className='p- font-bold text-lg '>{user.name}</h1>

<img src={user.img} alt='user' width={"500"} height={"500"} />

<p className='text-xs'>{user.summary}</p>
  </Card>;



//story #1 - Card
//create story from a template
export const card = Template.bind({});


//customize source code 
card.parameters = {
  docs: {
    source: {
      code: 'import {Card} from design-system-betaflux/Card',
      language: "javascript",
      type: "auto",
    },
  },
};






