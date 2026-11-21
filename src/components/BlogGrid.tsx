"use client";

import { BlogCard, posts } from "@/components/Blogs";

// 3x3 grid matching the design: rows cycle through the post images
// [1,2,3] / [2,3,1] / [3,2,1]
const gridPosts = [
  posts[0], posts[1], posts[2],
  posts[1], posts[2], posts[0],
  posts[2], posts[1], posts[0],
];

export default function BlogGrid() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gridPosts.map((post, i) => (
          <BlogCard key={`${post.image}-${i}`} {...post} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="cta-brackets text-[14px] text-foreground transition-colors hover:text-white focus-visible:text-white"
        >
          View More
        </button>
      </div>
    </section>
  );
}
