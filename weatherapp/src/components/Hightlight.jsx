import React from 'react'
import { GiWindSlap } from "react-icons/gi"
export default function Hightlight({ stats }) {
  return (
    <div className="bg-slate-600 pb-4 sm:pl-4 md:pl-1 text-slate-200 md:flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
      <h2 className='text-sm mt-2'>{stats.title}</h2>
      <div className="mt-2 ">
        <span className='text-4xl font-bold'>{stats.value}</span> &nbsp;
        <span className='text-2xl'>{stats.unit}</span>
      </div>
      {stats.direction ? <div classNameName="mt-2 flex justify-evenly">
        <GiWindSlap style={{

          marginTop: "4px",
          fontSize: "32px"
        }} />
        <div classNameName="ms-2 text-4xl text-slate-200"> {stats.direction} </div>
      </div> : null}
      {
        stats.title == "Humidity" ? <div className="w-2/3 mt-8 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${stats.value}%` }}></div>
        </div> : null
      }
    </div>
  )
}
