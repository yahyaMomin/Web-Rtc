import React, { useState } from 'react'
import ContentWrapper from '../../ContentWrapper'
import Card from '../../components/card/Card'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [eye, setEye] = useState(true)
  const [eye2, setEye2] = useState(true)
  const Toggle = () => {
    setEye(!eye)
  }
  const Toggle2 = () => {
    setEye2(!eye2)
  }
  return (
    <ContentWrapper>
      <Card>
        <h1 className="text-center mb-10 font-semibold">Wellcome Back</h1>
        <form action="">
          <label className=" text-xs opacity-[0.5] text-white " htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            name="email"
            className="w-full py-2 px-2 mt-2 mb-4 rounded-md inputs"
            type="email"
            placeholder="name@gmail.com"
            required
          />

          <div className="inputPass relative mt-2 mb-4">
            <label className=" text-xs opacity-[0.5] text-white " htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              className="w-full py-2 px-2  rounded-md inputs "
              type={eye ? 'password' : 'text'}
              placeholder="Password"
              required
            />
            <span onClick={Toggle} className="absolute icon  text-black opacity-[0.5] text-[25px]">
              {eye ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <button onClick={() => navigate('/otp')} className="text-end w-full my-3 text-[var(--main)]">
            Forget Password?
          </button>
          <input
            type="submit"
            value="Login"
            onClick={() => navigate('/home')}
            className="inputs bg-[var(--main)] w-full rounded-md py-2 px-2 mt-2 mb-4 cursor-pointer"
          />
        </form>
        <p className="text-center">
          Don't Have an Account?
          <button onClick={() => navigate('/register')} className="text-[var(--main)] ml-3">
            Register
          </button>
        </p>
      </Card>
    </ContentWrapper>
  )
}

export default Login
