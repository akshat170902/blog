// Navigation helpers for Next.js
const routerUtils = {
  goTo(router, path) {
    router.push(path);
  },
  goToBlogs(router) {
    router.push("/blogs");
  },
  goToBlogDetail(router, id) {
    router.push(`/blogs/${id}`);
  },
};

export default routerUtils;
