import { useState } from "react";
import { Input } from "../Input";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "../Button";

function LogInFields() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <label htmlFor='email' className='relative w-full'>
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
      setValue
      <label htmlFor='password' className='relative w-full'>
        Password
        <Input
          className='w-full'
          type='password'
          id='password'
          name='password'
          fullWidth={true}
          value={password}
          onChange={setPassword}
        />
      </label>
      <Button
        label='login'
        variant='contained'
        style={{
          backgroundColor: "orange",
          color: "white",
        }}
      />
    </>
  );
}

export default LogInFields;
