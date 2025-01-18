
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons:{
    icon:'/icons/logo.svg'
  }
};

const RootLayout = ( {children} : {children : ReactNode}) => {
  return (
    <main>
         {children}
    </main>
  )
}

export default RootLayout