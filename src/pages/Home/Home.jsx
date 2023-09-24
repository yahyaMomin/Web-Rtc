import React from 'react'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../../ContentWrapper'
import { FaArrowRightLong } from 'react-icons//fa6'

const Home = () => {
  const navigate = useNavigate()

  const toRegister = () => {
    navigate('/register')
  }
  return (
    <ContentWrapper>
      <Card>
        <div className="home w-full">
          <p className="font-bold text-lg text-center"> Wellcome to Web RTC </p>
          <p className="leading-7 mt-3 text-gray-400 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem iste unde cumque ut corrupti
            quisquam, explicabo debitis cum adipisci doloremque, nisi blanditiis voluptate eveniet id animi nihil
            asperiores esse hic vel. Similique dolorum vel tempore. Nisi recusandae perspiciatis magni quibusdam
            possimus? Debitis laborum expedita quod voluptas aliquid, ipsum aperiam?
          </p>
          <div className="btns text-center">
            <button
              onClick={toRegister}
              className="mt-5 inline  text-center bg-[var(--main)]  text-black px-[20px] py-[8px] rounded-xl"
            >
              <div className="text flex justify-center items-center">
                <p className="mr-2">Get Your Username</p>
                <i>
                  <FaArrowRightLong />
                </i>
              </div>
            </button>
            <div className="register">
              <p className="mt-5">
                Have An Account
                <button onClick={() => navigate('/login')} className=" ml-3 text-[var(--main)]">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </ContentWrapper>
  )
}

export default Home
