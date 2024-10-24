import React from 'react'

export const Timerbox = ({value}) => {
  return (
    <div>
        <span className="p-4 text-2xl font-normal text-center border border-black rounded-md text-black w-16 h-16">
            {value}
        </span>
    </div>
  )
}
