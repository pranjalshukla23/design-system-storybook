import { AiFillStar } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Icon } from "./Icon";
import React from "react";

const iconsList = [
  {
    component: <AiFillStar />,
    name: "rating",
  },
  {
    component: <AiOutlineShareAlt />,
    name: "share",
  },
  {
    component: <CiBookmark />,
    name: "bookmark",
  },
  {
    component: <HiOutlineArrowNarrowRight />,
    name: "arrowRight",
  },
  {
    component: <AiOutlineEyeInvisible />,
    name: "eyeInvisible",
  },
  {
    component: <MdErrorOutline />,
    name: "error",
  },
  {
    component: <AiOutlineCheckCircle />,
    name: "check",
  },
];

export const Icons = ({}) => {
  return (
    <div className='grid grid-cols-3 gap-4  w-3/4'>
      {iconsList.map((icon) => (
        <Icon icon={icon} />
      ))}
    </div>
  );
};
