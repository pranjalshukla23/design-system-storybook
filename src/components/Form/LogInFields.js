import { useState } from "react";
import { Input } from "../Input";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import arrowIcon from "../../images/arrow.svg";

function LogInFields() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        htmlFor='email'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'>Email</span>
        <Input
          className={"peer box-border h-10"}
          type='email'
          id='email'
          name='email'
          placeholder='johndoe@example.com'
          fullWidth={true}
          value={email}
          onChange={setEmail}
          style={{
            border:
              email.length > 0 && email.length < 5
                ? "3px solid rgba(222, 42, 44, 0.45)"
                : email.length > 0
                ? "3px solid rgba(31, 166, 93, 0.45)"
                : "",
          }}
        />
        {email.length > 0 && email.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : email.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        )}
      </label>
      <label
        htmlFor='firstName'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'>Password</span>
        <Input
          className={"peer box-border h-10"}
          type={`${showPassword ? "text" : "password"}`}
          id='password'
          name='password'
          fullWidth={true}
          value={password}
          onChange={setPassword}
        />
        {showPassword ? (
          <AiOutlineEye
            onClick={() => setShowPassword(false)}
            className='absolute inset-y-8 right-4 text-base cursor-pointer'
          />
        ) : (
          <AiOutlineEyeInvisible
            onClick={() => setShowPassword(true)}
            className='absolute inset-y-8 right-4 text-base cursor-pointer'
          />
        )}
      </label>
      <Button
        style={{
          marginTop: "36px",
        }}
        label='Login'
        variant='contained'
        icon={<img src={arrowIcon} alt='arrow' />}
      />
    </>
  );
}

export default LogInFields;
