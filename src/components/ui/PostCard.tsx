"use client"
import { createComment, deletePost, getPosts, toggleLikes } from '@/actions/post.action';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

type Posts = Awaited<ReturnType<typeof getPosts>>
type Post = Posts[number]

function PostCard({post, dbUserId} : {post : Post; dbUserId : string | null}) {
  
  const {user} = useUser()
  const [newComment, setNewComment] = useState("")
  const [isCommenting, setIsCommenting] = useState(false)
  const [optimisticLikes, setOptimisticLikes] = useState(post._count.likes)
  const [hasLiked, setHasLiked] = useState(post.likes.some(like => like.userId === dbUserId))
  const [isLiking, setIsLiking] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const handleLike = async () => {
    if(isLiking) return;
    try {
      setIsLiking(false)
      setHasLiked(prev => !prev)
      setOptimisticLikes(prev => prev + (hasLiked ? -1 : 1))
      await toggleLikes(post.id)
    } catch (error) {
      setOptimisticLikes(post._count.likes)
      setHasLiked(post.likes.some(like => like.userId === dbUserId))
    } finally {
      setIsLiking(false)
    }
  }

  const handleComments = async () => {
    if(!newComment.trim() || isCommenting) return
    try {
      setIsCommenting(true)
      const result = await createComment(post.id, newComment)
      if(result?.success){
        toast.success("Created Comment")
        setNewComment("")
      }
    } catch (error) {
      toast.error("Failed to add comment")
    } finally {
      setIsCommenting(false)
    }
  }

  const handleDeletePost = async () => {
    if(isDeleting) return
    try {
      setIsCommenting(true)
      const result = await deletePost(post.id)
      if(result.success){
        toast.success("Deleted Post")
      } else throw new Error(result.error)
    } catch (error) {
      toast.error("Failed to delete the post")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default PostCard