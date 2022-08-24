import React, { useRef, useCallback } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { getPostsPage } from "../../api/axios";
import { Loading, StyledDiv } from "./Posts.style";
import PostCard from "./../PostCard/PostCard";
const Posts: React.FC = () => {
  //Fetching data
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
  // Detecting the last post
  const intObserver = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (post: any) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          // console.log("we're near the last post");
          fetchNextPage();
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );
  // Error catching
  if (status == "error" && error instanceof Error)
    return <StyledDiv>{error.message}</StyledDiv>;

  //Content, it maps through the data react-query returned and returns a post card component for each item, if its the last post it will disconnect, if its not it keeps going...

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
      {status === "loading" ? (
        <StyledDiv>
          <Loading />{" "}
        </StyledDiv>
      ) : (
        content
      )}
      {isFetchingNextPage && <Loading />}
    </>
  );
};

export default Posts;
