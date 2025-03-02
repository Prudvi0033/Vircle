"use server"

import { prisma } from "@/app/lib/prisma"
import { getDbUserId } from "./user.action"
import { revalidatePath } from "next/cache"

export async function createPost(content : string, imageUrl : string) {
    try {
        const userId = await getDbUserId()
        const post = await prisma.post.create({
            data : {
                content,
                image : imageUrl,
                authorId : userId
            }
        })
        revalidatePath("/") //to get created post in the home page

        return {sucess : true, post}
    } catch (error) {
        console.log("failed to create post",error);
        return {sucess : false,  error : "Failed to create post"}
    }
}