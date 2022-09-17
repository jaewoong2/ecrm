import Layout from '@/components/Layout'
import React from 'react'

const AlertDashboard = () => {
  return (
    <Layout>
      <main className="container mx-auto min-h-full w-full bg-white px-52">
        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">알림 대시보드</h2>
          <div className="mt-10 flex h-fit w-full justify-center gap-5">
            <div className="h-[200px]">
              <img
                className="h-full"
                src="http://newsimg.hankookilbo.com/2016/07/29/201607291048768721_1.jpg"
                alt="cctv"
              />
            </div>
            <div className="h-[200px]">
              <img
                className="h-full"
                src="https://t1.daumcdn.net/roughmap/imgmap/1e95887a71eae807fdd27bb5f2d172f22363d561a923e96ee159c7ceeace4f94"
                alt="지도"
              />
            </div>
          </div>
          <div className="mt-10 w-full px-10">
            <p>범죄자 김 아무개 알림!</p>
            <p>위치: 노원구 </p>
            <p>식별시간: 22시31분</p>
            <p>출동현황: 출동중</p>
          </div>
          <div className="mt-10 w-full">
            <form className="flex w-full flex-col gap-5 p-10">
              <label htmlFor="name">
                <p className="pb-2 text-sm">제목</p>
                <input id="name" className="w-[400px] rounded-xl border bg-blue-50 p-3" />
              </label>
              <label htmlFor="description">
                <p className="pb-2 text-sm">내용</p>
                <textarea id="description" className="w-[400px] rounded-xl border bg-blue-50 p-3" />
              </label>
              <button
                type="submit"
                className="w-[400px] rounded-xl bg-blue-500 p-5 text-white hover:bg-blue-400"
              >
                제출
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AlertDashboard
