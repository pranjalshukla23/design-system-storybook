import { useState } from "react";
import { Input } from "../Input";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button";

function SignUpFields() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <label htmlFor='firstName' className='relative w-full'>
        First Name
        <Input
          className='w-full'
          type='text'
          id='firstName'
          name='firstName'
          placeholder='John'
          fullWidth={true}
          val={firstName}
          setValue={setFirstName}
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
      <label htmlFor='lastName' className='relative w-full'>
        Last Name
        <Input
          className='w-full'
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Doe'
          fullWidth={true}
          val={lastName}
          setValue={setLastName}
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

      <label htmlFor='email' className='relative w-full'>
        Email
        <Input
          className=' w-full'
          type='email'
          id='email'
          name='email'
          placeholder='johndoe@example.com'
          fullWidth={true}
          val={email}
          setValue={setEmail}
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

      <label htmlFor='address' className='relative w-full'>
        Address
        <textarea
          id='address'
          name='address'
          className='w-full border-2'
          val={address}
          setValue={setAddress}
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

      <label htmlFor='state' className='relative w-full'>
        State
        <select
          id='state'
          name='state'
          className='w-full border-2 p-2'
          val={state}
          setValue={setState}
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

      <label htmlFor='pinCode' className='relative w-full'>
        Pin Code
        <Input
          className='w-full'
          type='text'
          id='pinCode'
          name='pinCode'
          placeholder='400061'
          fullWidth={true}
          val={pinCode}
          setValue={setPinCode}
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
      <Button label='Sign up' variant='contained' />
    </>
  );
}

export default SignUpFields;
