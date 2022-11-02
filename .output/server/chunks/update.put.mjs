import { defineEventHandler, useBody } from 'h3';
import { updatePost } from './posts.mjs';
import './index.mjs';
import '@prisma/client';

const update_put = defineEventHandler(async (event) => {
  const body = await useBody(event);
  console.log("\u{1F680} ~ file: update.put.js ~ line 5 ~ defineEventHandler ~ body", body);
  return updatePost(body);
});

export { update_put as default };
//# sourceMappingURL=update.put.mjs.map
