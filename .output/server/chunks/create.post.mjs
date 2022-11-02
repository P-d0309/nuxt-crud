import { defineEventHandler, useBody } from 'h3';
import { createPost } from './posts.mjs';
import './index.mjs';
import '@prisma/client';

const create_post = defineEventHandler(async (event) => {
  const body = await useBody(event);
  return createPost(body);
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
