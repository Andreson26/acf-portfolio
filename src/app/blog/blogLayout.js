import BlogHeader from "@/Component/BlogHeader/BlogHeader";
import BlogFooter from "@/Component/BlogFooter/BlogFooter";

export default function BlogLayout({ children }) {
  return (
    <div>
      <BlogHeader />
      <div className="blog-content">{children}</div>
      <BlogFooter />
    </div>
  );
}
