module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
      });
    
    return {
    dir: {
        includes: "_includes",
        layouts: "_includes/layouts"
    }
    };
};