import React from 'react'
import { Link } from 'react-router-dom'

function MenuTabs() {
  return (
    <div>
        <ul className="mb-6 flex flex-row gap-6 text-sm font-medium ">
          <li className=" w-24 bg-green-800 items-center h-6 rounded-md " style={{textAlign:"center"}}>
            <Link
              href="#"
              className=""
              aria-current="page"
              style={{color:"white"}}
            >
             Quarter 1
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className=""
            >
             Quarter 2
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className=""
            >
              Quarter 3
            </Link>
          </li>
          
        </ul>
      </div>
  )
}

export default MenuTabs
