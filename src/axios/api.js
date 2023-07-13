// axios 요청이 들어가는 모든 모듈
import axios from "axios";

// 전체 게시글 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

// 상세 게시글 조회
const getDetailPost = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`
  );
  return response.data;
};

// 게시글 추가
const addPost = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

// 게시글 삭제
const deletePost = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

// 게시글 수정
const updatePost = async (post) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${post.id}`,
    post
  );
};

// 댓글 조회
const getComments = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments`
  );
  return response.data;
};

// 댓글 추가
const addComment = async (newComment) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, newComment);
};

// 댓글 삭제
const deleteComment = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/comments/${id}`);
};

// 댓글 수정
const updateComment = async (comment) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/comments/${comment.id}`,
    comment
  );
};

export {
  getPosts,
  // getCountryPosts,
  getDetailPost,
  addPost,
  deletePost,
  updatePost,
  getComments,
  addComment,
  deleteComment,
  updateComment,
};
