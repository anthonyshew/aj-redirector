import Head from "next/head";
import { useEffect } from "react";

export default function Post({ post }) {
  useEffect(() => {
    window.location.replace("https://www.youtube.com/watch?v=NpEaa2P7qZI");
  }, []);

  return (
    <Head>
      <title>{post.title}</title>
      <meta property="og:image" content={post.coverImage.url} />
    </Head>
  );
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      post: {
        title: "some title",
        coverImage: {
          url: "https://mms.businesswire.com/media/20210216006039/en/859393/23/vercel.jpg",
        },
      },
    },
  };
}
// const data = await getPostAndMorePosts(params.slug, preview);

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   };
// }

export async function getStaticPaths() {
  return {
    paths: ["/post/anything"],
    fallback: true,
  };

  // const allPosts = await getAllPostsWithSlug();
  // return {
  //   paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
  //   fallback: true,
  // };
}
