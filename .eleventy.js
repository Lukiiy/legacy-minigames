module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("screenshots");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("tips.js");
  eleventyConfig.addPassthroughCopy("bg.js");
  eleventyConfig.addPassthroughCopy("server");
};