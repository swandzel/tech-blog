import React from "react";

export default async function Comments() {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );

  return <div>xxx</div>;
}
