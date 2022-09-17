import Layout from '@/components/Layout'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Layout>
      <main className="container w-full px-52">
        <div className="mt-5 flex w-full items-center justify-between">
          <section className="flex min-h-[250px] min-w-[200px] flex-col items-center rounded-xl bg-white">
            <h2 className="my-7 text-2xl">실시간 범죄자 현황</h2>
            <div className="flex justify-center gap-3">
              <div className="flex flex-col items-center justify-center bg-gray-50 p-10">
                <div>등록된 범죄자 수</div>
                <div className="text-2xl font-bold text-blue-500">1891명</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-50 p-10">
                <div>범죄자 증가율</div>
                <div className="text-2xl font-bold text-red-500">-3.11%</div>
              </div>
            </div>
          </section>
          <section className="flex min-h-[250px] min-w-[200px] flex-col items-center rounded-xl bg-white">
            <h2 className="my-7 text-2xl">실시간 실종자 현황</h2>
            <div className="flex justify-center gap-3">
              <div className="flex flex-col items-center justify-center bg-gray-50 p-10">
                <div>등록된 실종자 수</div>
                <div className="text-2xl font-bold text-blue-500">1891명</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-50 p-10">
                <div>실종자 증가율</div>
                <div className="text-2xl font-bold text-red-500">-3.11%</div>
              </div>
            </div>
          </section>
        </div>
        <section className="container mt-10 flex w-full justify-center">
          <div className="w-full rounded-xl bg-white pb-5">
            <h2 className="p-3 text-xl font-semibold">실시간 알림 서비스</h2>
            <div className="relative flex w-full justify-center">
              <img
                src="https://cis.seoul.go.kr/ko/totalalimi_new/images/map/map_0.png"
                alt="서울"
              />
              <Link
                to="/alert"
                className="absolute top-[300px] h-4 w-4 cursor-pointer rounded-full bg-red-700"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Dashboard
