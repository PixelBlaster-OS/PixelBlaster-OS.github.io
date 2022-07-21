import React from 'react'

const Card = props => {
  return (
    <div className={`justify-center items-center p-6 mx-auto bg-slate-700 text-slate-300 dark:bg-slate-300 dark:text-slate-700 rounded-xl shadow-lg row-span-2 grid overflow-hidden grid-cols-1 grid-rows-2 gap-2 w-60 h-60 sm:w-96 sm:h-96 ${props.class}`}>
      <div className=" sm:text-xl font-medium text-center row-span-2 col-span-2">
        <h1 className=" sm:text-2xl font-bold">{props.title}<br></br></h1>
        <p> {props.description}</p>
      </div>
    </div>
  )
}

export default Card