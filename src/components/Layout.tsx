import React, { PropsWithChildren } from 'react'
import LeftNavigtaion from './LeftNavigtaion'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen w-full">
      <LeftNavigtaion />
      {children}
    </div>
  )
}

export default Layout
