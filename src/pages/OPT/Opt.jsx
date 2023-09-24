import React, { useState } from 'react'
import ContentWrapper from '../../ContentWrapper'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router-dom'

const Otp = () => {
  const navigate = useNavigate()
  const [cansend, setCansend] = useState(false)
  const [second, setSecond] = useState(10)
  const [sended, setSended] = useState('Send again')

  const timer = () => {
    const myInterval = setInterval(() => {
      if (second === 0) {
        clearInterval(myInterval)
        setCansend(true)
      } else {
        setSecond(second - 1)
      }
    }, 600)
  }
  timer()

  const sendOPT = () => {
    if (cansend) {
      setSended('sended OTP')
      alert('OTP sended')
      setSecond(45)
      setCansend(false)
      // timer()
    } else {
      return alert(`wait ${second} second`)
    }
  }

  return (
    <ContentWrapper>
      <Card>
        <h1 className="text-center mb-10 font-semibold">Enter The OTP which we Just Send You</h1>
        <form action="">
          <label className=" text-xs opacity-[0.5] text-white " htmlFor="OTP">
            ENTER OTP
          </label>
          <input
            id="OTP"
            name="OTP"
            className="w-full py-2 px-2 mt-2 mb-4 rounded-md inputs"
            type="number"
            placeholder="Enter OTP"
            required
          />

          <input
            type="submit"
            value="Login"
            onClick={() => navigate('/home')}
            className="inputs bg-[var(--main)] w-full rounded-md py-2 px-2 mt-2 mb-4 cursor-pointer"
          />
        </form>
        <div className="resendOtp flex justify-end gap-5">
          <p onClick={sendOPT} className="text-end text-[var(--main)] cursor-pointer">
            {sended}
          </p>
          <span className="text-gray-500 ">{`00:${second < 10 ? '0' + second : second}`}</span>
        </div>
      </Card>
    </ContentWrapper>
  )
}

export default Otp
