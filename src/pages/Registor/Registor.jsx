import React, { useState } from 'react'
import ContentWrapper from '../../ContentWrapper'
import Card from '../../components/card/Card'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Registor = () => {
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
        <h1 className="text-center mb-10 font-semibold">Create an Account</h1>
        <form action="">
          <label className=" text-xs opacity-[0.5] text-white " htmlFor="name">
            USER NAME
          </label>
          <input
            id="name"
            name="name"
            className="w-full py-2 px-2 mt-2 mb-4 rounded-md inputs"
            type="text"
            placeholder="User Name"
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
          <div className="inputPass relative mt-2 mb-4">
            <label className=" text-xs opacity-[0.5] text-white " htmlFor="rePass">
              CONFIRM PASSWORD
            </label>
            <input
              id="rePass"
              name="rePass"
              className="w-full py-2 px-2  rounded-md inputs "
              type={eye2 ? 'password' : 'text'}
              placeholder="Confirm Password"
              required
            />
            <span onClick={Toggle2} className="absolute icon  text-black opacity-[0.5] text-[25px]">
              {eye2 ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
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
          <input
            type="submit"
            value="Register"
            onClick={() => navigate('/otp')}
            className="inputs bg-[var(--main)] w-full rounded-md py-2 px-2 mt-2 mb-4 cursor-pointer"
          />
        </form>
        <p className="text-center">
          Have an Account?
          <button onClick={() => navigate('/login')} className="text-[var(--main)] ml-3">
            Login
          </button>
        </p>
      </Card>
    </ContentWrapper>
  )
}

export default Registor
