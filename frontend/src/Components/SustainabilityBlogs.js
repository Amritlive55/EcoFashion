import React from "react";
import "./SustainabilityBlogs.css"; // Ensure the CSS file is in the same directory

const SustainabilityBlogs = () => {
  const blogs = [
    {
      title: "10 Ways to Embrace Sustainable Fashion",
      description:
        "Learn simple tips to reduce waste and make eco-friendly choices in your wardrobe.",
      link: "https://timesofindia.indiatimes.com/life-style/fashion/web-stories/10-ways-to-embrace-sustainable-fashion/photostory/104380296.cms",
    },
    {
      title: "Recycling 101: Turning Old Clothes into New Things",
      description:
        "Discover creative ways to recycle your old clothes and reduce your environmental impact.",
      link: "https://caslay.in/blogs/news/creative-ways-to-reuse-old-clothes",
    },
    {
      title: "Top 11 Eco-Friendly Fashion Brands to Follow",
      description:
        "Explore brands that are leading the way in sustainable fashion trends.",
      link: "https://blog.cleanhub.com/best-sustainable-clothing-brands",
    },
    {
      title: "Eco-Friendly Fabrics",
      description:
        "Explore the benefits of using eco-friendly fabrics like organic cotton and bamboo.",
      link: "https://www.bbcearth.com/news/six-fashion-materials-that-could-help-save-the-planet",
    },
    {
      title: "DIY Fashion Ideas",
      description:
        "Get creative with DIY fashion projects that are stylish and sustainable.",
      link: "https://www.lee.in/blogs/trendy-fashion-and-styling-tips/50-sustainable-fashion-ideas-for-a-stylish-and-ecofriendly-wardrobe?srsltid=AfmBOorRoYTeN9OvZaQcenMFsAhndipbAL1adOinRXics09hm7HkQ_1Z&utm_source=sangria&utm_medium=sangria_blogs&utm_campaign=sangria_organic",
    },
    {
      title: "Why Slow Fashion Matters",
      description:
        "Understand the importance of slow fashion and its role in reducing environmental harm.",
      link: "https://maake.com/blogs/news/why-slow-fashion-is-the-only-choice?srsltid=AfmBOorNHB8Ksnhd1QN6IiKt98rZxeDHxSDGP8gBcGuKYpqcRHZQmZeN",
    },
    {
      title: "Minimalist Wardrobe Guide",
      description:
        "Find out how to build a minimalist wardrobe with essential pieces that last.",
      link: "https://impactforgood.co/post/how-i-started-a-minimalist-wardrobe",
    },
  ];

  return (
    <section className="sustainability-blogs">
      <h2>Sustainability Blogs & Tips</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainabilityBlogs;