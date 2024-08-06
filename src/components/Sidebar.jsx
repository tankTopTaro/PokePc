import React from 'react'
import pokeball from '../assets/pokeball.svg'
import { TbPokeball } from 'react-icons/tb'
import { LuSword } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaTags } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
            <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg text-xs text-gray-600">
                <img src={pokeball} alt="" style={{ width: '50px', height: '50px'}} />
            </span>
            </div>

            <div className="border-t border-gray-100">
            <div className="px-2">
                <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                    <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <TbPokeball size={42} />
                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        Pokédex
                    </span>
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <LuSword size={42} />

                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        MoveDex
                    </span>
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <BsStars size={42}/>

                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        AbilityDex
                    </span>
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <MdLocationPin size={42} />

                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        LocationDex
                    </span>
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <FaTags size={42} />

                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        TypeDex
                    </span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar