import React, { useRef, useCallback } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import PostCard from "./../PostCard/PostCard";
import { getPostsPage } from "../../api/axios";
import { Loading, StyledDiv } from "./Posts.style";
const Posts: React.FC = () => {
  //   const fetchPosts = async () => {
  //     return await axios.get(
  //       "https://uniplato.staging.uniplato.us/api/v1/mock-data"
  //     );
  //   };

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery(
    ["/mock-data"],
    ({ pageParam = 1 }: QueryFunctionContext) => getPostsPage(pageParam),
    {
      staleTime: 0,
      cacheTime: 1800000,
      getNextPageParam: ({ data }: any) => {
        const { hasNextPage, page } = data.data;
        return hasNextPage ? page + 1 : undefined;
      },
    }
  );

  const intObserver = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (post: any) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("we're near the last post");
          fetchNextPage();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error" && error instanceof Error)
    return <div>{error.message}</div>;

  //   console.log(data?.pages[0].data.data);
  const content =
    data &&
    data.pages &&
    data.pages.map(({ hasNextPage, data: { data } }: any) => {
      return (
        Array.isArray(data.data) &&
        data.data.map((post: any, i: any) => {
          if (!hasNextPage) {
            return (
              <PostCard
                ref={lastPostRef}
                key={post.id}
                title={post.title}
                src={post.image}
                description={post.description}
              />
            );
          } else
            return (
              <PostCard
                key={post.id}
                title={post.title}
                src={post.image}
                description={post.description}
              />
            );
        })
      );
    });

  return (
    <>
      {content}
      {isFetchingNextPage && <Loading />}
      {status === "loading" ? (
        <StyledDiv>
          <Loading />{" "}
        </StyledDiv>
      ) : null}
      {/* <p>
        <a href="#top">Back to Top</a>
      </p> */}
    </>
  );
};

export default Posts;
