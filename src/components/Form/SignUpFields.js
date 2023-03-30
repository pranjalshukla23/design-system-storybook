import { useState } from "react";
import { Input } from "../Input";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import arrowIcon from "../../images/arrow.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUpFields() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        htmlFor='firstName'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'> First Name </span>
        <Input
          className={"peer box-border h-10"}
          type='text'
          id='firstName'
          name='firstName'
          placeholder='John'
          fullWidth={true}
          value={firstName}
          onChange={setFirstName}
          required
          style={{
            border:
              firstName.length > 0 && firstName.length < 5
                ? "3px solid rgba(222, 42, 44, 0.45)"
                : firstName.length > 0
                ? "3px solid rgba(31, 166, 93, 0.45)"
                : "",
          }}
        />
        {firstName.length > 0 && firstName.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : firstName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden  absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        )}
      </label>
      <label
        htmlFor='lastName'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal '>Last Name </span>
        <Input
          className={"peer box-border h-10"}
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Doe'
          fullWidth={true}
          value={lastName}
          onChange={setLastName}
          required
          style={{
            border:
              lastName.length > 0 && lastName.length < 5
                ? "3px solid rgba(222, 42, 44, 0.45)"
                : lastName.length > 0
                ? "3px solid rgba(31, 166, 93, 0.45)"
                : "",
          }}
        />
        {lastName.length > 0 && lastName.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : lastName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        )}
      </label>

      <label
        htmlFor='email'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'> Email </span>
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
        htmlFor='password'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'> Password </span>
        <Input
          className={"peer box-border h-10"}
          type={`${showPassword ? "text" : "password"}`}
          id='password'
          name='password'
          placeholder=''
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

      <label
        htmlFor='cpassword'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'>
          {" "}
          Confirm Password{" "}
        </span>
        <Input
          className={"peer box-border h-10"}
          type='password'
          id='cpassword'
          name='cpassword'
          placeholder=''
          fullWidth={true}
          value={confirmPassword}
          onChange={setConfirmPassword}
          style={{
            border:
              confirmPassword.length > 0 && password !== confirmPassword
                ? "3px solid rgba(222, 42, 44, 0.45)"
                : confirmPassword.length > 0 && password === confirmPassword
                ? "3px solid rgba(31, 166, 93, 0.45)"
                : "",
          }}
        />
        {confirmPassword.length > 0 && password !== confirmPassword ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : confirmPassword.length > 0 && password === confirmPassword ? (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        ) : (
          <></>
        )}
      </label>

      <label
        htmlFor='address'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'> Address </span>
        <textarea
          id='address'
          name='address'
          className='peer w-full rounded-xl border-1 border-bcolor h-14 overflow-hidden'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {address.length > 0 && address.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : address.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        )}
      </label>

      <label
        htmlFor='state'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'> State </span>
        <select
          id='state'
          name='state'
          className='font-normal w-full border-1 border-bcolor rounded-xl p-2 box-border h-10'
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value='Karnataka'>Karnataka</option>
          <option value='Assam'>Assam</option>
          <option value='Tamil Nadu'>Tamil Nadu</option>
          <option value='Goa'>Goa</option>
          <option value='Maharashtra'>Maharashtra</option>
          <option value='Kerela'>Kerela</option>
          <option value='Aandhra Pradesh'>Aandhra Pradesh</option>
        </select>
      </label>

      <label
        htmlFor='pinCode'
        className='relative w-full text-xs  flex flex-col gap-1'
      >
        <span className='px-1 text-[#181818] font-normal'>Pin Code</span>
        <Input
          className={"peer box-border h-10"}
          type='text'
          id='pinCode'
          name='pinCode'
          placeholder='400061'
          fullWidth={true}
          value={pinCode}
          onChange={setPinCode}
          style={{
            border:
              pinCode.length > 0 && pinCode.length < 5
                ? "3px solid rgba(222, 42, 44, 0.45)"
                : pinCode.length > 0
                ? "3px solid rgba(31, 166, 93, 0.45)"
                : "",
          }}
        />
        {pinCode.length > 0 && pinCode.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#E46869] text-base' />
        ) : pinCode.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-8 right-4 text-[#42C87F] text-base' />
        )}
      </label>
      <Button
        style={{
          marginTop: "36px",
        }}
        label='Submit'
        variant='contained'
        icon={<img src={arrowIcon} alt='arrow' />}
      />
    </>
  );
}

export default SignUpFields;
