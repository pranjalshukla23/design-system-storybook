import { useState } from "react";
import { Input } from "../Input";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function SignUpFields() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <label htmlFor='firstName' className='relative w-full text-xs'>
        <span className='px-1 text-[#181818] font-normal'> First Name </span>
        <Input
          className={"peer"}
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
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#E46869] text-base' />
        ) : firstName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden  absolute inset-y-7 right-4 text-[#42C87F] text-base' />
        )}
      </label>
      <label
        htmlFor='lastName'
        className='relative w-full text-xs peer-focus:text-red-500'
      >
        <span className='px-1 text-[#181818] font-normal'>Last Name </span>
        <Input
          className={"peer"}
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
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#E46869] text-base' />
        ) : lastName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#42C87F] text-base' />
        )}
      </label>

      <label htmlFor='email' className='relative w-full text-xs'>
        <span className='px-1 text-[#181818] font-normal'> Email </span>
        <Input
          className={"peer"}
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
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#E46869] text-base' />
        ) : email.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#42C87F] text-base' />
        )}
      </label>

      <label htmlFor='address' className='relative w-full text-xs'>
        <span className='px-1 text-[#181818] font-normal'> Address </span>
        <textarea
          id='address'
          name='address'
          className='peer w-full rounded-xl border-1 border-bcolor'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {address.length > 0 && address.length < 5 ? (
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#E46869] text-base' />
        ) : address.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#42C87F] text-base' />
        )}
      </label>

      <label htmlFor='state' className='relative w-full text-xs'>
        <span className='px-1 text-[#181818] font-normal'> State </span>
        <select
          id='state'
          name='state'
          className='font-normal w-full border-1 border-bcolor rounded-xl p-2'
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

      <label htmlFor='pinCode' className='relative w-full text-xs'>
        <span className='px-1 text-[#181818] font-normal'>Pin Code</span>
        <Input
          className={"peer"}
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
          <MdErrorOutline className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#E46869] text-base' />
        ) : pinCode.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='peer-focus-within:block hidden absolute inset-y-7 right-4 text-[#42C87F] text-base' />
        )}
      </label>
      <Button
        style={{
          marginTop: "36px",
        }}
        label='Submit'
        variant='contained'
        icon={<HiOutlineArrowNarrowRight />}
      />
    </>
  );
}

export default SignUpFields;
