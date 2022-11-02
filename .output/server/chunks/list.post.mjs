import { defineEventHandler, useBody } from 'h3';
import { listPosts } from './posts.mjs';
import './index.mjs';
import '@prisma/client';

const list_post = defineEventHandler(async (event) => {
  const body = await useBody(event);
  return listPosts(body);
});

export { list_post as default };
//# sourceMappingURL=list.post.mjs.map
