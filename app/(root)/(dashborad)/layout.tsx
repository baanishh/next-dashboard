
import NavBar from '@/components/NavBar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ( {children} : {children : ReactNode}) => {
  return (
   <main>
    <NavBar/>

    <div className='flex bg-[#091A3A]'>
      <Sidebar/>
      <section className='flex flex-1 min-h-screen p-2 '>
            <div className="w-full">
                 {children}
            </div>
        </section>
    </div>
   </main>
  )
}

export default HomeLayout