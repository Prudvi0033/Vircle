'use client'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Card, CardContent } from './card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Textarea } from './textarea'
import { Button } from './button'
import { ImageIcon, Loader2Icon, SendIcon } from 'lucide-react'

function CreatePost() {
  const { user } = useUser()
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isPosting, setIsPosting] = useState(false)
  const [showUploadedImage, setShowUploadedImage] = useState(false)

  const handleSubmit = () => {
      if(!content.trim() && !imageUrl){
        return
      }

      setIsPosting(true)
      try {
        
      } catch (error) {
        
      }
  }

  return (
    <Card className="mb-6">
    <CardContent className="pt-6">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage className='rounded-full' src={user?.imageUrl || "/avatar.png"} />
          </Avatar>
          <Textarea
            placeholder="What's on your mind?"
            className="min-h-[100px] resize-none border-none focus-visible:ring-0 p-0 text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isPosting}
          />
        </div>

        {/* Handle image upload */}

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setShowUploadedImage(!showUploadedImage)}
              disabled={isPosting}
            >
              <ImageIcon className="size-4 m-2" />
            </Button>
          </div>
          <Button
            className="flex items-center"
            onClick={handleSubmit}
            disabled={(!content.trim() && !imageUrl) || isPosting}
          >
            {isPosting ? (
              <>
                <Loader2Icon className="size-4 mr-2 animate-spin" />
                Posting...
              </>
            ) : (
              <>
                <SendIcon className="size-4 mr-2" />
                Post
              </>
            )}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default CreatePost