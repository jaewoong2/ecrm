import React from 'react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const LeftNavigtaion = () => {
  return (
    <aside className="w-[300px] bg-blue-900 p-5">
      <div className="flex h-[10%] w-full flex-col items-center justify-center border-b border-dashed py-3">
        <BiUser className="h-52 w-auto rounded-full border border-gray-300 fill-gray-300 p-2" />
        <p className="text-gray-300">이인기</p>
      </div>
      <ul className="mt-10 flex w-full flex-col justify-center gap-10">
        <li className="border-b border-dashed py-3 text-xl text-gray-300">
          <Link to="/">대시보드</Link>
        </li>
        <li className="border-b border-dashed py-3 text-xl text-gray-300">
          <Link to="/add">범죄자 관련 서비스</Link>
        </li>
      </ul>
    </aside>
  )
}

export default LeftNavigtaion
