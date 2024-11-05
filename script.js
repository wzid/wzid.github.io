const posts = [
    {name: "Why CS is Better", file_name: "cs-is-better.html"},
    {name: "How to get a Job in today's market", file_name: "job.html"},
];

const blog_posts_div = document.getElementById("blog-posts");
posts.forEach(post => {
    const post_tag = document.createElement("a");
    post_tag.href = "posts/" + post.file_name;
    post_tag.textContent = post.name;


    blog_posts_div.appendChild(post_tag);
});