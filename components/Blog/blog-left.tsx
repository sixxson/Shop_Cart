import Link from "next/link";
import { getBlogCategories, getOthersBlog } from "@/sanity/queries";
import { Title } from "../ui/text";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BLOG_CATEGORIESResult, OTHERS_BLOG_QUERYResult } from "@/sanity.types";

/**
 * Renders the left sidebar for the blog page, displaying blog categories and the latest blogs.
 *
 * @param {Object} props - The component props.
 * @param {string} props.slug - The slug of the current blog post to exclude from the latest blogs list.
 * @returns {Promise<JSX.Element>} The rendered sidebar component.
 *
 * @remarks
 * - Fetches blog categories and other blog posts asynchronously.
 * - Displays a list of blog categories and a list of the latest blogs (excluding the current one).
 * - Each category and blog is rendered with relevant details and styling.
 */
export default async function BlogLeft({ slug }: { slug: string }) {
  const categories: BLOG_CATEGORIESResult = await getBlogCategories();
  const blogs: OTHERS_BLOG_QUERYResult = await getOthersBlog(slug, 5);

  return (
    <div>
      <div className="border border-lightColor p-5 rounded-md">
        <Title className="text-base">Blog Categories</Title>
        <div className="space-y-2 mt-2">
          {categories?.map((category, index) => (
            <div
              key={index}
              className="text-lightColor flex items-center justify-between text-sm font-medium"
            >
              <p>
                {category.blogcategories && category.blogcategories[0]?.title
                  ? category.blogcategories[0].title
                  : "Untitled"}
              </p>
              <p className="text-darkColor font-semibold">{`(1)`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-lightColor p-5 rounded-md mt-10">
        <Title className="text-base">Latest Blogs</Title>
        <div className="space-y-4 mt-4">
          {blogs?.map((blog, index) => (
            <Link
              href={
                blog?.slug && blog.slug.current
                  ? `/blog/${blog.slug.current}`
                  : "#"
              }
              key={index}
              className="flex items-center gap-2 group"
            >
              {blog?.mainImage && (
                <Image
                  src={urlFor(blog.mainImage).url()}
                  alt="blogImage"
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                />
              )}
              <p className="line-clamp-2 text-sm text-lightColor group-hover:text-shop_dark_green hoverEffect">
                {blog?.title ?? ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
