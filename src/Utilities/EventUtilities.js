import {sendPost} from './DataUtilities.js';

import env from './env.js';

let {API_URL} = env;
let eventEndpoint = "/event";

// Constants 
export const LOGGED_IN_EVENT = "Logged In";
export const PAGE_VIEWED_EVENT = "Page Viewed";
export const COMMENT_ADDED_EVENT = "Comment Added";
export const POST_VIEWED_EVENT = "Post Viewed";

export const sendUserEvent = (event, meta = null) => {
    let userId = window.localStorage.userId ? window.localStorage.userId : null;
    let data = {
        "userId": userId,
        "event": event,
        "page": window.location.pathname,
        "meta": meta
    }
    return sendPost(API_URL + eventEndpoint, data);
}