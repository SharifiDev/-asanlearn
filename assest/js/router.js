const pageTitle = "Spa سبزلرن";

const router = {
  404: {
    template: "./404.html",
    title: `پیدا نشد | ${pageTitle}`,
  },
  "/": {
    template: "./index.html",
    title: `خانه | ${pageTitle}`,
  },
  "/blog": {
    template: "./blog.html",
    title: `بلاگ | ${pageTitle}`,
  },
  "/courses": {
    template: "./courses.html",
    title: `دوره‌ها | ${pageTitle}`,
  },
  "/product": {
    template: "./product.html",
    title: `جزئیات دوره | ${pageTitle}`,
  },
  "/article": {
    template: "./article.html",
    title: `مقاله | ${pageTitle}`,
  },
  "/cart": {
    template: "./cart.html",
    title: `سبد خرید | ${pageTitle}`,
  },
};

export default router;
