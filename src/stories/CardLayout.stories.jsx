import { Card } from "../components/Card";
import { Typography } from "../components/Typography";
import { Badge } from "../components/Badge";
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
        width: "358px",
        height: "198px",
      }}
    >
      <div className='flex flex-col  gap-1'>
        <div className=' flex justify-between items-center w-full '>
          <Typography
            style={{
              width: "60%",
              fontWeight: "bold",
              fontFamily: "Inter",
            }}
          >
            Kotak Standard Multicap Regular Group
          </Typography>
          <Badge
            label='AQR 4.3'
            ratingIcon={<AiFillStar color='gold' className='text-sm' />}
            color='secondary'
            style={{
              color: "white",
              width: "92px",
              height: "24px",
              fontSize: "12px",
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
      </div>

      <div className='flex flex-col  w-full'>
        <div className=' flex justify-between items-center w-full'>
          <Typography
            style={{
              fontSize: "10px",
              color: "#979BA2",
            }}
          >
            Returns
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              color: "#979BA2",
            }}
          >
            Scheme Size
          </Typography>
        </div>
        {/* text container */}
        <div className='flex justify-between items-center w-full mt-0'>
          {/* text 1 */}
          <div className='flex justify-center items-center gap-2'>
            <Typography
              style={{
                color: "#979BA2",
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
                color: "#979BA2",
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
                color: "#979BA2",
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
          </div>
        </div>
      </div>

      {/* portfolio container */}
      <div className=' flex justify-between items-center w-full'>
        <Badge
          label={"Crisil 4.2"}
          ratingIcon={<AiFillStar color='gold' />}
          style={{
            fontSize: "10px",
          }}
        />
        <Badge
          label={"MorningStar 4.3"}
          style={{
            fontSize: "10px",
          }}
          ratingIcon={<AiFillStar color='gold' />}
        />
        <Badge
          label={"Value Research 4.2"}
          style={{
            fontSize: "10px",
          }}
          ratingIcon={<AiFillStar color='gold' />}
        />
      </div>
      <div className=' flex justify-between items-center w-full'>
        <Checkbox
          label='Add to my portfolio'
          style={{
            color: "#4F5051",
            fontWeight: "bold",
            fontSize: "10px",
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
