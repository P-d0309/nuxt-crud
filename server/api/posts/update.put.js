import { updatePost } from "../db/posts";

export default defineEventHandler (async (event) => {
    const body = await useBody(event);
    console.log("🚀 ~ file: update.put.js ~ line 5 ~ defineEventHandler ~ body", body)
    return  updatePost(body);
})