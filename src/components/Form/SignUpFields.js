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
        First Name
        <Input
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
                ? "2px solid red"
                : "",
          }}
        />
        {firstName.length > 0 && firstName.length < 5 ? (
          <MdErrorOutline className='absolute top-10 right-3 text-red-500' />
        ) : firstName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='absolute top-10 right-3 text-green-500' />
        )}
      </label>
      <label htmlFor='lastName' className='relative w-full text-xs'>
        Last Name
        <Input
          className='w-full'
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
              lastName.length > 0 && lastName.length < 5 ? "2px solid red" : "",
          }}
        />
        {lastName.length > 0 && lastName.length < 5 ? (
          <MdErrorOutline className='absolute top-10 right-3 text-red-500' />
        ) : lastName.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='absolute top-10 right-3 text-green-500' />
        )}
      </label>

      <label htmlFor='email' className='relative w-full text-xs'>
        Email
        <Input
          className=' w-full'
          type='email'
          id='email'
          name='email'
          placeholder='johndoe@example.com'
          fullWidth={true}
          value={email}
          onChange={setEmail}
          style={{
            border: email.length > 0 && email.length < 5 ? "2px solid red" : "",
          }}
        />
        {email.length > 0 && email.length < 5 ? (
          <MdErrorOutline className='absolute top-10 right-3 text-red-500' />
        ) : email.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='absolute top-10 right-3 text-green-500' />
        )}
      </label>

      <label htmlFor='address' className='relative w-full text-xs'>
        Address
        <textarea
          id='address'
          name='address'
          className='w-full rounded-xl border-1 border-bcolor'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            border:
              address.length > 0 && address.length < 5 ? "2px solid red" : "",
          }}
        />
        {address.length > 0 && address.length < 5 ? (
          <MdErrorOutline className='absolute top-10 right-3 text-red-500' />
        ) : address.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='absolute top-10 right-3 text-green-500' />
        )}
      </label>

      <label htmlFor='state' className='relative w-full text-xs'>
        State
        <select
          id='state'
          name='state'
          className='w-full border-1 border-bcolor rounded-xl p-2'
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          style={{
            border:
              state.length > 0 && pinCode.length < 5 ? "2px solid red" : "",
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
        Pin Code
        <Input
          className='w-full'
          type='text'
          id='pinCode'
          name='pinCode'
          placeholder='400061'
          fullWidth={true}
          value={pinCode}
          onChange={setPinCode}
          style={{
            border:
              pinCode.length > 0 && pinCode.length < 5 ? "2px solid red" : "",
          }}
        />
        {pinCode.length > 0 && pinCode.length < 5 ? (
          <MdErrorOutline className='absolute top-10 right-3 text-red-500' />
        ) : pinCode.length <= 0 ? (
          <></>
        ) : (
          <AiOutlineCheckCircle className='absolute top-10 right-3 text-green-500' />
        )}
      </label>
      <Button
        label='Sign Up'
        variant='contained'
        icon={<HiOutlineArrowNarrowRight />}
      />
    </>
  );
}

export default SignUpFields;
