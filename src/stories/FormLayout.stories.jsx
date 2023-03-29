import SignUpFields from "../components/Form/SignUpFields";
import LogInFields from "../components/Form/LogInFields";
import { Card } from "../components/Card";
import { Typography } from "../components/Typography";
import { Badge } from "../components/Badge";
import { AiFillStar } from "react-icons/ai";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { GrShareOption } from "react-icons/gr";
import { FiBookmark } from "react-icons/fi";
import starIcon from "../images/star.svg";

//define a folder
export default {
  title: "Layouts/CustomForm",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "This is a form example",
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template2 = (args) => (
  <div className='flex  justify-evenly items-center'>
    <Card
      style={{
        width: "400px",
      }}
    >
      <SignUpFields />
    </Card>
  </div>
);

//story #2 - signup Form
//create story from a template
export const Signup = Template2.bind({});

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template3 = (args) => (
  <div className='flex  justify-evenly items-center'>
    <Card
      style={{
        width: "400px",
      }}
    >
      <LogInFields />
    </Card>
  </div>
);

//story #3 - login Form
//create story from a template
export const Login = Template3.bind({});

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template4 = (args) => (
  <div className='w-[390px] shadow-xl flex flex-col justify-center items-center gap-8'>
    <div className=' flex justify-center items-center w-full h-[132px] text-2xl bg-[#1B2054] shadow-xl text-white'>
      Fill in your details below
    </div>
    <Card
      style={{
        width: "358px",
        height: "198px",
      }}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className=' flex justify-between items-start w-full  py-1'>
          <Typography
            style={{
              width: "70%",
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#181818",
            }}
          >
            Kotak Standard Multicap Regular Group
          </Typography>
          <Badge
            label='AQR 4.3'
            // ratingIcon={<AiFillStar color='gold' className='text-base' />}
            ratingIcon={<img src={starIcon} />}
            color='secondary'
            style={{
              color: "white",
              width: "92px",
              height: "24px",
            }}
          />
        </div>
        <div className=' flex justify-start w-full'>
          <Typography
            style={{
              fontSize: "10px",
              color: "#181818",
            }}
          >
            Equity MF | MultiCap
          </Typography>
        </div>
      </div>

      <div className='flex flex-col  w-full '>
        <div className=' flex justify-between items-center w-full'>
          <Typography
            style={{
              fontSize: "10px",
              color: "#979BA2",
              lineHeight: "12px",
            }}
          >
            Returns
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              color: "#979BA2",
              lineHeight: "12px",
            }}
          >
            Scheme Size
          </Typography>
        </div>
        {/* text container */}
        <div className='flex justify-between items-center w-full pr-2 '>
          {/* text 1 */}
          <div className='flex justify-between items-center '>
            <div className='text  flex'>
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
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                8.76%
              </Typography>
            </div>
          </div>
          <div className='bar'>|</div>
          {/* text 2 */}
          <div className='flex justify-between items-center  '>
            <div className='text  flex'>
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
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                13.19%
              </Typography>
            </div>
          </div>
          <div className='bar'>|</div>
          {/* text 3 */}
          <div className='flex justify-between items-center'>
            <div className='text  flex'>
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
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                22.15%
              </Typography>
            </div>
          </div>

          {/* text 4 */}
          <div className='flex justify-center items-center '>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              19,827 cr
            </Typography>
          </div>
        </div>
      </div>

      {/* portfolio container */}
      <div className=' flex justify-between  w-full '>
        <Badge
          label={"Crisil 4.2"}
          // ratingIcon={<AiFillStar color='gold' className='text-xs' />}
          ratingIcon={<img src={starIcon} />}
          style={{
            fontSize: "10px",
            color: "#4F5051",
            fontWeight: "500px",
            height: "20px",
            borderRadius: "4px",
          }}
        />
        <Badge
          label={"MorningStar 4.3"}
          style={{
            fontSize: "10px",
            color: "#4F5051",
            fontWeight: "500px",

            height: "20px",
            borderRadius: "4px",
          }}
          // ratingIcon={<AiFillStar color='gold' className='text-xs' />}
          ratingIcon={<img src={starIcon} />}
        />
        <Badge
          label={"Value Research 4.2"}
          style={{
            fontSize: "10px",
            color: "#4F5051",
            fontWeight: "500px",

            height: "20px",
            borderRadius: "4px",
          }}
          // ratingIcon={<AiFillStar color='gold' className='text-xs' />}
          ratingIcon={<img src={starIcon} />}
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
        <div className='icons flex gap-2 justify-center items-center'>
          <GrShareOption className='text-[#1B2054]' />
          <FiBookmark className='text-[#1B2054]' />
        </div>
      </div>
    </Card>

    {/* form container */}
    <div className=' w-full text-base font-Inter font-bold'>
      <h1 className='px-4 text-xl my-4'>Fill in your details below</h1>
      <Card
        style={{
          width: "100%",
          boxShadow: "inherit",
        }}
      >
        <SignUpFields />
      </Card>
    </div>
  </div>
);

//story #3 - example Form
//create story from a template
export const RegisterForm = Template4.bind({});
