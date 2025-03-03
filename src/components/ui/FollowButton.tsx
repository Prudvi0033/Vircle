'use client'
import React, { useState } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { toggleFollow } from '@/actions/user.action'

function FollowButton({userId} : {userId : string}) {

    const [isLoading, setIsLoading] = useState(false)

    const handleFollow = async () => {
        setIsLoading(true)

        try {
          await toggleFollow(userId)
          toast.success("User Followed")  
        } catch (error) {
            toast.error("Error in Following User")
        }
    }

  return (
    <div>
        <Button
        size='sm'
        variant={'secondary'}
        onClick={handleFollow}
        disabled={isLoading}
        className='w-20'
        >{isLoading ? (<Loader2 className="size-4 animate-spin"/>) : ("Follow")}</Button>
    </div>
  )
}

export default FollowButton