import React from 'react'
import { Link } from 'react-router-dom'
import ContentWrapper from '../../../ContentWrapper'
import './style.css'

const Navigation = () => {
  return (
    <ContentWrapper>
      <div className="nav">
        <Link to="/">
          <h2 className="font-semibold">
            {' '}
            WEB <span className="text-[var(--main)]">RTC</span>
          </h2>
        </Link>
      </div>
    </ContentWrapper>
  )
}

export default Navigation
