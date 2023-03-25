import { Card } from "../components/Card";
import { Typography } from "../components/Typography";
import { Chip } from "../components/Chip";
import { AiFillStar } from "react-icons/ai";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

//define a folder
export default {
  title: "Layouts/CustomCard",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "This is a card example",
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template2 = (args) => {
  const [value, setValue] = useState("");

  return (
    <Card
      style={{
        width: "450px",
      }}
    >
      <div className=' flex justify-between items-center w-full'>
        <Typography
          style={{
            width: "60%",
            fontWeight: "bold",
          }}
        >
          Kotak Standard Multicap Regular Group
        </Typography>
        <Chip
          label='AQR 4.3'
          ratingIcon={<AiFillStar color='gold' />}
          size='sm'
          color='secondary'
          style={{
            color: "white",
          }}
        />
      </div>
      <div className=' flex justify-start w-full'>
        <Typography
          style={{
            fontSize: "10px",
          }}
        >
          Equity MF | MultiCap
        </Typography>
      </div>

      <div className=' flex justify-between items-center w-full'>
        <Typography
          style={{
            fontSize: "10px",
            color: "gray",
          }}
        >
          Returns
        </Typography>
        <Typography
          style={{
            fontSize: "10px",
            color: "gray",
          }}
        >
          Scheme Size
        </Typography>
      </div>

      {/* text container */}
      <div className='flex justify-between items-center w-full'>
        {/* text 1 */}
        <div className='flex justify-center items-center gap-2'>
          <Typography
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            1 yr:
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            8.76%
          </Typography>
          |
        </div>

        {/* text 2 */}
        <div className='flex justify-center items-center  gap-2'>
          <Typography
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            3 yr:
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            13.19%
          </Typography>
          |
        </div>

        {/* text 3 */}
        <div className='flex justify-center items-center  gap-2'>
          <Typography
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            5 yr:
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            22.15%
          </Typography>
          |
        </div>

        {/* text 4 */}
        <div className='flex justify-center items-center  gap-2'>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            19,827 cr
          </Typography>
          |
        </div>
      </div>

      {/* portfolio container */}
      <div className=' flex justify-between items-center w-full'>
        <Chip label={"Crisil 4.2"} ratingIcon={<AiFillStar color='gold' />} />
        <Chip
          label={"MorningStar 4.3"}
          ratingIcon={<AiFillStar color='gold' />}
        />
        <Chip
          label={"Value Research 4.2"}
          ratingIcon={<AiFillStar color='gold' />}
        />
      </div>
      <div className=' flex justify-between items-center w-full'>
        <Checkbox
          label='Add to my portfolio'
          style={{
            color: "gray",
            fontWeight: "bold",
          }}
        />
        <div className='icons flex gap-2'>
          <AiOutlineShareAlt />
          <CiBookmark />
        </div>
      </div>
    </Card>
  );
};

//story #2 - card
//create story from a template
export const card = Template2.bind({});
