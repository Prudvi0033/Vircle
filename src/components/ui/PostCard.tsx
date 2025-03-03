"use client"
import { getPosts } from '@/actions/post.action';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

type Posts = Awaited<ReturnType<typeof getPosts>>
type Post = Posts[number]

function PostCard({post, dbUserId} : {post : Post; dbUserId : string | null}) {
  
  const {user} = useUser()
  const [newComment, setNewComment] = useState("")
  const [iscommenting, setIscommenting] = useState(false)
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes)
  const [hasLiked, setHasLiked] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const handleLike = async () => {

  }
  
  const handleComments = async () => {

  }

  const handleDeletePost = async () => {

  }

  return (
    <div>
      
    </div>
  )
}

export default PostCard