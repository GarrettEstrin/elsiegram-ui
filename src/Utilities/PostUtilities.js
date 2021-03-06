import {sendGet, sendPost, sendDelete, sendPut} from './DataUtilities.js';

import env from './env.js';

let {API_URL} = env;
let paginatedPostsEndpoint = "/post/get/paginated/";
let individualPostEndpoint = "/post/get/";
let postCountEndpoint = "/post/count";
let createPostEndpoint = "/post/v2/add";
let createPostEndpointV3 = "/post/v3/add";
let deletePostEndpoint = "/post/delete";
let editPostEndpoint = "/post/edit";

export const getPaginatedPosts = (page = 0) => {
    if(page === "") {
      page = 0;
    }
    return sendGet(API_URL + paginatedPostsEndpoint + page)
}

export const getIndividualPost = (postId) => {
  return sendGet(API_URL + individualPostEndpoint + postId)
}

export const getPostCount = () => {
  return sendGet(API_URL + postCountEndpoint);
}

export const createPost = (data, reportUploadProgress) => {
  let formData = new FormData();
  let name = data.name.split(' ').join('');
  formData.append("caption", data.caption);
  formData.append("file", data.file);
  formData.append("name", name);
  formData.append("type", data.type);
  formData.append("isPrivate", data.isPrivate);
  formData.append("height", data.height);
  formData.append("width", data.width);
  return sendPost(API_URL + createPostEndpoint, formData, null, reportUploadProgress);
}

export const createPostV2 = (data, reportUploadProgress) => {
  let formData = new FormData();
  formData.append("caption", data.caption);
  data.imgArray.forEach(img => {
    formData.append("file", img.file);
  })
  formData.append("isPrivate", data.isPrivate);
  formData.append("fileData", JSON.stringify(data.imgData));

  return sendPost(API_URL + createPostEndpointV3, formData, null, reportUploadProgress);
}

export const deletePost = (postId) => {
  return sendDelete(API_URL + deletePostEndpoint, {postId});
}

export const sendEditPost = (post) => {
  return sendPut(API_URL + editPostEndpoint, post);
}
