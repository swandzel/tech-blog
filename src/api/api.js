const posts = [
  {
    id: 1,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "/image.jpg",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 2,
    author: "Joe Doe",
    date: "20/1/2024",
    title: "How Make Next.js app fast",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "/image.jpg",
    tag: "front-end",
    slug: "how-make-next-js-app-fast",
  },
  {
    id: 3,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "/image.jpg",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 4,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "/image.jpg",
    tag: "tests",
    slug: "title",
  },
  {
    id: 5,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque autem ex, beatae fugit eligendi id voluptatibus reiciendis, accusamus expedita cumque blanditiis iste harum omnis culpa debitis veritatis totam nesciunt delectus dolorem cum? Id nesciunt tenetur porro optio molestiae! Quam.",
    image: "/image.jpg",
    tag: "back-end",
    slug: "title_slug",
  },
];

export const getAllPosts = () => {
  return posts;
};

export const getPost = (slug) => {
  return posts.find((post) => post.slug === slug);
};

export const getAllComments = async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );
  return data.json();
};
