import Layout from '@/components/Layout'
import React from 'react'
import { Link } from 'react-router-dom'

const PersonAdd = () => {
  return (
    <Layout>
      <main className="container w-full px-52">
        <div className="mt-5 flex w-full items-center justify-between">
          <Link to="/edit">
            <section className="flex min-h-[200px] min-w-[200px] flex-col items-center justify-center rounded-xl bg-white">
              <h2 className="text-2xl">범죄자 등록</h2>
            </section>
          </Link>
          <section className="flex min-h-[200px] min-w-[200px] flex-col items-center justify-center rounded-xl bg-white">
            <h2 className="text-2xl">범죄자 삭제</h2>
          </section>
        </div>
        <section className="container mt-10 flex w-full justify-center">
          <div className="w-full rounded-xl bg-white pb-5">
            <h2 className="p-3 text-xl font-semibold">범죄자 현황</h2>
            <div className="mx-auto grid w-full grid-cols-4 items-center justify-center">
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
              <img className="mx-auto mt-1" src="https://i.pravatar.cc/120" alt="범죄자" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default PersonAdd
