import Layout from '@/components/Layout'
import React from 'react'

const PersonEdit = () => {
  return (
    <Layout>
      <main className="container mx-auto min-h-full w-full bg-white px-52">
        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">범죄자등록</h2>
          <form className="flex w-full flex-col items-center gap-5 p-10">
            <label htmlFor="name">
              <p className="pb-2 text-sm">범죄자 이름</p>
              <input id="name" className="w-[400px] rounded-xl border bg-blue-50 p-3" />
            </label>
            <label htmlFor="description">
              <p className="pb-2 text-sm">범죄자 정보</p>
              <textarea id="description" className="w-[400px] rounded-xl border bg-blue-50 p-3" />
            </label>
            <label htmlFor="image">
              <p className="pb-2 text-sm">범죄자 이름</p>
              <input
                id="image"
                type="file"
                className="w-[400px] rounded-xl border bg-blue-50 p-3"
              />
            </label>
            <button
              type="submit"
              className="w-[400px] rounded-xl bg-blue-500 p-5 text-white hover:bg-blue-400"
            >
              등록하기
            </button>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default PersonEdit
