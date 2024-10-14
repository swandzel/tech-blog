import React from "react";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Tag tag="tag" />
      My Post: {params.slug}
      <Image src="" alt="" width={360} height={240} />
      Research Your Destination
      <p>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
      Research Your Destination
      <p>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
      Research Your Destination
      <p>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
      </p>
    </div>
  );
}
