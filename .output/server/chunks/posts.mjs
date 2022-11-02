import prisma from './index.mjs';
import '@prisma/client';

const createPost = (formData) => {
  return prisma.posts.create({
    data: formData
  });
};
const updatePost = (formData) => {
  return prisma.posts.update({
    where: { id: parseInt(formData.id) },
    data: {
      name: formData.name,
      description: formData.description,
      status: formData.status
    }
  });
};
const listPosts = (formData) => {
  if (formData.id) {
    return prisma.posts.findFirstOrThrow({
      where: { id: parseInt(formData.id) }
    });
  } else {
    return prisma.posts.findMany();
  }
};
const deletePost = (formData) => {
  if (formData.id) {
    return prisma.posts.delete({
      where: {
        id: parseInt(formData.id)
      }
    });
  }
};

export { createPost, deletePost, listPosts, updatePost };
//# sourceMappingURL=posts.mjs.map
