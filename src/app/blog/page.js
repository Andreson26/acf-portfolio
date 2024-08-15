import Link from 'next/link';

const posts = [
  { title: 'First Post', slug: 'first-post' },
  { title: 'Second Post', slug: 'second-post' },
  // ... other posts
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <Link href={`/blog/${post.slug}`}>
              <button>Read More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

