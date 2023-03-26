import SignUpFields from "../components/Form/SignUpFields";
import LogInFields from "../components/Form/LogInFields";
import { Card } from "../components/Card";

//define a folder
export default {
    title: "Layouts/CustomForm",
    component: Card,
    parameters: {
      docs: {
        description: {
          component: 'This is a form example',
        },
      },
    },
}


//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template2 = (args) => (
  <div className="flex  justify-evenly items-center">
  <Card
      style={{
        width: "400px",
      }}
    >
  <SignUpFields/>
    </Card>
    <Card
      style={{
        width: "400px",
      }}
    >
  <LogInFields/>
    </Card>
  </div>
 
)



//story #2 - Form
//create story from a template
export const form = Template2.bind({});