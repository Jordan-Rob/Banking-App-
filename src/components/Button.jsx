import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6
    bg-blue-gradient font-poppins font-medium
    text-[18px] text-primary w-[170px] h-[64px] outline-none rounded-[12px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button