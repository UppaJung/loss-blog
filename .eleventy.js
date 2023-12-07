module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('main', 'layouts/main.11ty.js');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.11ty.js');
  eleventyConfig.addLayoutAlias('posts', 'layouts/posts.11ty.js');
};