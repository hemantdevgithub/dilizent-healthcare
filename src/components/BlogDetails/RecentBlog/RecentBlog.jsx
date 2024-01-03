import React, { useEffect, useState } from 'react';
import BlogCard from '../../Blogs/BlogSection/BlogCard';

const RecentBlog = ({filterFn}) => {
    const [recentBlog, setRecentBlog] = useState([]);
    const blogs = [
        {
            id: 1,
            title:
                "The Importance of SEO for Your Business: Benefits of SEO & Why SEO Is So Powerful",
            thumbnail:
                "https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp",
            content:
                "If you have ever had a conversation about digital marketing techniques, you’ve probably heard the term SEO tossed around. You might know that SEO is important and has something to do with search engines. But what exactly is SEO? In this article, we will explain SEO, why it is good for your business, and why you need it. SEO stands for Search Engine Optimization. In the simplest of terms, good SEO optimizes your visibility online. This means that the more people see your website, the more your online traffic increases, and the better your chances to provide your product or service to a greater number of people. Let’s break down why SEO is so important. Google search results display on an infinite scroll, meaning that new results populate as you continue scrolling down. While this means that your results might make it on to the first page (even if they’re the 100th result), the amount of clicks and impressions a webpage receives drop off substantially after the first 5-10 links. When you type in a Google search, how often do you venture down to the tenth or twentieth result? Chances are, you rarely have to because the first few options at the top—below the advertisements of course—contain the information you requested in your search query. If a prospective customer types in a topic relevant to what your business can provide, don’t you want to be on the top of that page alongside your competitors? If you aren’t, another business just gained a new customer—or, you just lost one. This is the importance of SEO for your business: SEO gives you the power to be the answer to potential customers’ questions. In addition to visibility and traffic increase, SEO contributes to your authoritative voice in your field. Authority then leads to brand trust, which ultimately leads to brand loyalty. When asking the question why is SEO good for business, the answer is that SEO not only attracts new customers but over time it also allows you to deepen your business’s relationship with those customers because of the trust you have established with them.",
            createdAt: new Date("June 20, 2022"),
            likes: "22",
            comments: "11",
        },
        {
            id: 2,
            title:
                "What is the Importance of Marketing for Businesses? Discover the Undiscovered  ",
            thumbnail:
                "https://s35764.pcdn.co/wp-content/uploads/2022/11/KLG-BMKT-emeritus-650x325.jpg.optimal.jpg",
            content:
                "Irrespective of whether you are a business owner or a working professional, there are several critical questions that you should be asking yourself. For example – Are you aware of the needs of your customers? Do you think customers trust your products? Have you observed any of the messages or posts that the customers make about your products and services? The one word that can answer all these questions is ‘marketing’. The importance of marketing for your business is that it makes the customers aware of your products or services, engages them, and helps them make the buying decision. Furthermore, a marketing plan, a part of your business plan helps in creating and maintaining demand, relevance, reputation, competition, etc. Therefore, as marketing has a pivotal role to play in making your business a huge success, without understanding the importance of marketing, it may be a little difficult to manage and run a profitable business in today’s world. To understand the importance of marketing for your business and why it is needed, we need to first understand what marketing is.",
            createdAt: new Date("June 25, 2022"),
            likes: "25",
            comments: " 21",
        },
        {
            id: 3,
            title:
                "Social media marketing: What it is and how to build your strategy",
            thumbnail:
                "https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg",
            content:
                "Looking to fine-tune your social media marketing strategy? Good! Now’s the perfect time to make it happen. In a landscape with more competition, content and networks than ever, a succinct strategy gives you the focus needed to say “no” to efforts that don’t serve your goals. That’s why we put together a comprehensive guide to creating a social media marketing plan from scratch. Whether you’re totally new to social or want to double-check your priorities in 2023, this guide has you covered. Social media marketing means using social media platforms like Instagram, Twitter and Facebook to promote your brand and sell your product or service. If your business comes out with a new item and you plan to promote the launch on social media, that’s social media marketing. If you interact with your customers via comments, that’s social media marketing. And if you create engaging content that showcases your brand’s values and story, that’s social media marketing too. This form of marketing requires you to use social media management skills and tools. Just as you prepare other aspects of your marketing strategy, you need to have a plan for your social media marketing. Now that we’ve defined social media marketing, let’s walk through how to create a plan. Check out our video below to watch how you can use the tips in this article to build a strategy in seven steps.",
            createdAt: new Date("Dec 20, 2022"),
            likes: "212",
            comments: "111",
        },
        {
            id: 4,
            title:
                "The Importance of SEO for Your Business: Benefits of SEO & Why SEO Is So Powerful",
            thumbnail:
                "https://www.metricmarketing.com/wp-content/uploads/2021/09/Metric_Blog_ImprtanceSEO-1.png.webp",
            content:
                "If you have ever had a conversation about digital marketing techniques, you’ve probably heard the term SEO tossed around. You might know that SEO is important and has something to do with search engines. But what exactly is SEO? In this article, we will explain SEO, why it is good for your business, and why you need it. SEO stands for Search Engine Optimization. In the simplest of terms, good SEO optimizes your visibility online. This means that the more people see your website, the more your online traffic increases, and the better your chances to provide your product or service to a greater number of people. Let’s break down why SEO is so important. Google search results display on an infinite scroll, meaning that new results populate as you continue scrolling down. While this means that your results might make it on to the first page (even if they’re the 100th result), the amount of clicks and impressions a webpage receives drop off substantially after the first 5-10 links. When you type in a Google search, how often do you venture down to the tenth or twentieth result? Chances are, you rarely have to because the first few options at the top—below the advertisements of course—contain the information you requested in your search query. If a prospective customer types in a topic relevant to what your business can provide, don’t you want to be on the top of that page alongside your competitors? If you aren’t, another business just gained a new customer—or, you just lost one. This is the importance of SEO for your business: SEO gives you the power to be the answer to potential customers’ questions. In addition to visibility and traffic increase, SEO contributes to your authoritative voice in your field. Authority then leads to brand trust, which ultimately leads to brand loyalty. When asking the question why is SEO good for business, the answer is that SEO not only attracts new customers but over time it also allows you to deepen your business’s relationship with those customers because of the trust you have established with them.",
            createdAt: new Date("June 20, 2022"),
            likes: "22",
            comments: "11",
        },
        {
            id: 5,
            title:
                "What is the Importance of Marketing for Businesses? Discover the Undiscovered  ",
            thumbnail:
                "https://s35764.pcdn.co/wp-content/uploads/2022/11/KLG-BMKT-emeritus-650x325.jpg.optimal.jpg",
            content:
                "Irrespective of whether you are a business owner or a working professional, there are several critical questions that you should be asking yourself. For example – Are you aware of the needs of your customers? Do you think customers trust your products? Have you observed any of the messages or posts that the customers make about your products and services? The one word that can answer all these questions is ‘marketing’. The importance of marketing for your business is that it makes the customers aware of your products or services, engages them, and helps them make the buying decision. Furthermore, a marketing plan, a part of your business plan helps in creating and maintaining demand, relevance, reputation, competition, etc. Therefore, as marketing has a pivotal role to play in making your business a huge success, without understanding the importance of marketing, it may be a little difficult to manage and run a profitable business in today’s world. To understand the importance of marketing for your business and why it is needed, we need to first understand what marketing is.",
            createdAt: new Date("June 25, 2022"),
            likes: "25",
            comments: " 21",
        },
        {
            id: 6,
            title:
                "Social media marketing: What it is and how to build your strategy",
            thumbnail:
                "https://media.sproutsocial.com/uploads/2020/08/12-Social-Media-Marketing-Strategy.svg",
            content:
                "Looking to fine-tune your social media marketing strategy? Good! Now’s the perfect time to make it happen. In a landscape with more competition, content and networks than ever, a succinct strategy gives you the focus needed to say “no” to efforts that don’t serve your goals. That’s why we put together a comprehensive guide to creating a social media marketing plan from scratch. Whether you’re totally new to social or want to double-check your priorities in 2023, this guide has you covered. Social media marketing means using social media platforms like Instagram, Twitter and Facebook to promote your brand and sell your product or service. If your business comes out with a new item and you plan to promote the launch on social media, that’s social media marketing. If you interact with your customers via comments, that’s social media marketing. And if you create engaging content that showcases your brand’s values and story, that’s social media marketing too. This form of marketing requires you to use social media management skills and tools. Just as you prepare other aspects of your marketing strategy, you need to have a plan for your social media marketing. Now that we’ve defined social media marketing, let’s walk through how to create a plan. Check out our video below to watch how you can use the tips in this article to build a strategy in seven steps.",
            createdAt: new Date("Dec 20, 2022"),
            likes: "212",
            comments: "111",
        },
    ];
    useEffect(() => {
        setRecentBlog(blogs.sort((a, b) => a.createdAt - b.createdAt))
    }, [])
    return (
        <div>
            <div className='rounded-xl py-5 mb-2'
                style={{ backgroundImage: 'linear-gradient(60deg, #EEF3FC 0%, #F0F0FF 100%)' }}
            >
                <h1 className='text-3xl px-4 font-bold text-secondary'>Recent Post</h1>
            </div>
            <div>
                {
                    recentBlog?.map(blog => <BlogCard filterFn={filterFn} key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;