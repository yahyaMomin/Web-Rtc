import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="  max-w-[450px] mx-auto w-full py-5 md:px-5 px-2 rounded-lg bg-[#38383b78] ">{children}</div>
    </div>
  )
}

export default Card
