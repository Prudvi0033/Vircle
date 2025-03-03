"use server"

import { prisma } from "@/app/lib/prisma"
import { getDbUserId } from "./user.action"

export async function getNotifications() {
    try {
        const userId = await getDbUserId()
        if(!userId) return []

        const notifications = await prisma.notification.findMany({
            where : {
                userId : userId
            },
            include : {
                creator : {
                    select : {
                        id : true,
                        name : true,
                        username : true,
                        image : true
                    }
                },
                post : {
                    select : {
                        id : true,
                        content : true,
                        image : true
                    }
                },
                comment : {
                    select : {
                        id : true,
                        content : true,
                        createdAt : true
                    }
                }
            },
            orderBy : {
                createdAt : 'asc'
            }
        })

        return notifications
    } catch (error) {
        console.log("Error in getting notifications",error);
    }
}

export async function markNotificationsAsRead(notifications : []) {
    try {
        await prisma.notification.updateMany({
            where : {
                id : {
                    in : notifications
                },
            },
            data : {
                read : true
            }
        })
        return  {success : true}
    } catch (error) {
        console.log("Error in reading notifications",error);
        return {sucess : false}
    }
}