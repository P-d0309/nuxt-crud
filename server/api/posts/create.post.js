import { createPost } from "../db/posts";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  
  return createPost(body);
});
