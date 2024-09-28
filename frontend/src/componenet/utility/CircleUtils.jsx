import React from 'react'

export default function CircleUtils(props) {
  return (
    <span className={`inline-block rounded-full text-center h-28 w-28 content-center tracking-widest ${props.class}`}>
      <h1 className='text-lg'>{props.text}</h1>
    </span>
  )
}
