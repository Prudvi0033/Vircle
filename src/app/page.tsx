import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import CreatePost from '@/components/ui/CreatePost'

async function Home() {

  const user = await currentUser()
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-10 gap-6'>
      <div className='lg:col-span-6'>
        {user ? <CreatePost/> : (null)}
      </div>

      <div className='hidden lg:block lg:col-span-4 sticky top-20'>
          Whom to follow
      </div>
    </div>
  )
}

export default Home