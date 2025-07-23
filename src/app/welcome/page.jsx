"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
function WelcomePage() {

  const { data: session } = useSession();
  console.log(session)

  if (!session) redirect("/login")

  return (
    <div>
      <Navbar session={session}/>
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3 '>Welcome {session?.user?.name}</h3>
        <p>{session?.user?.email}</p>
        <hr className='my-3 h-0.5 opacity-20' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eum iusto earum quae nihil error, eveniet doloribus tempore. Exercitationem in cum aperiam illum quis nihil debitis iusto reprehenderit excepturi illo?</p>
      </div>
    </div>
  )
}

export default WelcomePage
