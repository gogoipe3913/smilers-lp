const path = require("path");
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/news\/articles\//)) {
    createPage({
      path: "/news/articles",
      matchPath: "/news/articles/:newsId",
      component: path.resolve("src/pages/news/articles.tsx"),
    });
  }
  if (page.path.match(/^\/news\/categories\//)) {
    createPage({
      path: "/news/categories",
      matchPath: "/news/categories/:category",
      component: path.resolve("src/pages/news/categories.tsx"),
    });
  }
  if (page.path.match(/^\/news\/tags\//)) {
    createPage({
      path: "/news/tags",
      matchPath: "/news/tags/:tag",
      component: path.resolve("src/pages/news/tags.tsx"),
    });
  }
  if (page.path.match(/^\/404\//)) {
    createPage({
      path: "/404",
      matchPath: "/404",
      component: path.resolve("src/pages/404.tsx"),
    });
  }
};
