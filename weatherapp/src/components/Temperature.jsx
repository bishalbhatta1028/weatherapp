import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoRainyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
function Temperature({ setCity, stats }) {
    const handleCityChange = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }
    return (

        <>

            <div className="flex justify-evenly sm:items-center">
                <input type="text"
                    className="bg-slate-600 border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 sm:ml-10 md:ml-auto lg:ml-auto lg:mr-auto p-2 focus:outline-none focus:border-slate-100"
                    placeholder='Enter Your Location'
                    onChange={handleCityChange}
                    defaultValue="kathmandu"

                ></input>

                < GrLocation className="m-4  text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" style={{ color: "white", fontSize: "28px" }} />

            </div>
            <div className="flex justify-center mt-8">
                {
                    stats.isDay !== 0 ? <IoSunnyOutline className="w-14 h-14 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" style={{ color: "yellow", fontSize: "48" }} /> : <FaMoon className="w-14 h-14 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" style={{ color: "white", fontSize: "48" }} />
                }


                {/* <IoRainyOutline style={{ color: "white", fontSize: "48px" }} /> 
                <IoPartlySunnyOutline className="text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" style={{ color: "white", fontSize: "48px" }} />*/}

            </div>
            <div className="flex justify-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                <p className="font-semibold text-[55px] text-slate-200 mt-8">{stats.temp}<span className="text-[33px]"> &#x00B0;C</span></p>

            </div>
            <div className="flex justify-center items-center text-slate-200 mt-5 text-[30px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">{stats.condition}</div>
            <div className="flex justify-center items-center text-slate-200 mt-5 text-[15px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out pl-2">Today &nbsp;: &nbsp;{stats.time} &nbsp;|&nbsp;{stats.location} </div>
        </>
    )
}

export default Temperature