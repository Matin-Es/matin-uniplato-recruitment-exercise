import React from "react";
import { CardContainerDiv, Image, Title, Description } from "./PostCard.style";
const Post = React.forwardRef((post: any, ref: any) => {
  const truncate = (str: string) => {
    return str.length >= 200 ? str.substring(0, 200) + "..." : str;
  };

  const postBody = (
    <CardContainerDiv>
      <div>
        <Image
          src={post.src}
          onError={(e: any) => {
            e.target.src =
              "https://media.carphonewarehouse.com/is/image/cpw2/galaxy-a40-wallet-caseBLACK?$accessories$";
            e.onerror = null;
          }}
        />
      </div>
      <div>
        <Title>{post.title}</Title>
      </div>
      <div>
        <Description>{truncate(post.description)}</Description>
      </div>
    </CardContainerDiv>
  );

  const content = ref ? <div ref={ref}>{postBody}</div> : <div>{postBody}</div>;

  return content;
});

export default Post;
