import { Fragment } from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1> News Page </h1>
      <ul>
        <li>
          <Link href="/news/next-js">Next JS</Link>
        </li>
        <li>
          <Link href="/news/hello world">Hello World</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
