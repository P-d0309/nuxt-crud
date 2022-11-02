import { defineEventHandler, useBody } from 'h3';
import { deletePost } from './posts.mjs';
import './index.mjs';
import '@prisma/client';

const post_delete = defineEventHandler(async (event) => {
  const body = await useBody(event);
  return deletePost(body);
});

export { post_delete as default };
//# sourceMappingURL=post.delete.mjs.map
