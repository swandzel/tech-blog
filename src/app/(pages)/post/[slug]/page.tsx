import React from "react";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";
import AuthorWithDate from "@/app/components/AuthorWithDate/AuthorWithDate";
import Comments from "@/app/components/Comments/Comments";
import TempImg from "@/public/image.jpg";
import { getPost } from "@/api/api";

export default function page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <div>
      <Tag tag={post.tag} />
      <h1>{post.title}</h1>
      <AuthorWithDate author={post?.author} date={post.date} />
      <Image src={TempImg} alt="" width={360} height={240} />
      <p>{post?.content}</p>
      <Comments />
    </div>
  );
}
