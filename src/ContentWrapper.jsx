import React from 'react'

const ContentWrapper = ({ children }) => {
  return (
    <div className="mx-5">
      <div className="w-full max-w-[1000px]  mx-auto">{children}</div>
    </div>
  )
}

export default ContentWrapper
