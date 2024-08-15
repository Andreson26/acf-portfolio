
import Link from 'next/link';

export default function BlogPostPage() {

  // Dummy post data
  const post = { title: 'Post Title', content: 'This is the post content.' };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      <Link href="/blog">
        <button>Back to Blog</button>
      </Link>
    </div>
  );
}

// If using getStaticProps
// export async function getStaticPaths() {
//   // Generate paths based on your data
// }

// export async function getStaticProps({ params }) {
//   // Fetch the post data based on the slug
// }

