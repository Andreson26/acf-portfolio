import Link from 'next/link';

export default function BlogHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/"> {/* This will navigate back to the root of your website */}
              <a>Home</a>
            </Link>
          </li>
          {/* Other navigation links */}
        </ul>
      </nav>
    </header>
  );
}

