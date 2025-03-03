import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import CreatePost from '@/components/ui/CreatePost'
import WhoToFollow from '@/components/ui/WhoToFollow'
import { getPosts } from '@/actions/post.action'
import PostCard from '@/components/ui/PostCard'
import { getDbUserId } from '@/actions/user.action'

async function Home() {

  const user = await currentUser()
  const posts = await getPosts()
  const dbUserId = await getDbUserId()
  
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-10 gap-6'>
      <div className='lg:col-span-6'>
        {user ? <CreatePost/> : (null)}
      </div>

      <div className='hidden lg:block lg:col-span-4 sticky top-20'>
          <WhoToFollow/>
      </div>

      <div className='space-y-6'>
          {posts.map((post) => (
            <PostCard key={post.id} post = {post} dbUserId={dbUserId} />
          ))}
      </div>
    </div>

    
  )
}

export default Home