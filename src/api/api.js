const posts = [
  {
    id: 1,
    author: "Joe Doe",
    author_image: "joe_doe",
    date: "7/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "1.webp",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 2,
    author: "Eric Smith",
    author_image: "eric_smith",
    date: "16/1/2024",
    title: "How Make Next.js app fast",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "2.webp",
    tag: "front-end",
    slug: "how-make-next-js-app-fast",
  },
  {
    id: 3,
    author: "Joe Doe",
    author_image: "joe_doe",
    date: "22/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "3.webp",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 4,
    author: "Joe Doe",
    author_image: "joe_doe",
    date: "24/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "2.webp",
    tag: "tests",
    slug: "title",
  },
  {
    id: 5,
    author: "Eric Smith",
    author_image: "eric_smith",
    date: "27/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "5.webp",
    tag: "back-end",
    slug: "title_slug",
  },
];

export const getAllPosts = () => {
  return posts.sort((a, b) => b.id - a.id);
};

export const getPost = (slug) => {
  return posts.find((post) => post.slug === slug);
};

export const getNewestPost = () => {
  return posts[posts.length - 1];
};

export const getAllComments = async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );
  return data.json();
};
