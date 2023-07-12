// import React from "react";
// import { useMutation, useQueryClient } from "react-query";
// import { addPost } from "../axios/api";

// export const mutation = "mutation";

// const postMutation = () => {
//   // 리액트 쿼리 관련 코드
//   const queryClient = useQueryClient(); // 무효화 시키려고 필요한 아이 ?
//   const mutation = useMutation(addPost, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("posts"); // 무효화 시켜서 새로고침 하지 않아도 바로 추가됨
//       console.log("추가 성공");
//     },
//   });

//   return <></>;
// };

// export default postMutation;
