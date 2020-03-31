import React, { Component } from 'react';

import Post from '../Post/Post.js';
import Pagination from '../Pagination/Pagination.js';
import Loading from '../Loading/Loading.js';
import {getPaginatedPosts} from '../../Utilities/PostUtilities.js';

import './Feed.scss';

class Feed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            page: 0
        }
    }

    componentDidMount() {
        let page = this.getUrlParameter("page");
        Promise.resolve(getPaginatedPosts(page))
            .then(data => {
                this.setState({
                    page,
                    posts: data.data.posts
                })
            })
    }

    buildFeedPosts(posts) {
        if(posts && posts.length < 1) {
            return null;
        }
        return (
            posts.map(post => {
                return <Post key={post.id} post_id={post.id} post_content={post.post_content} post_image_url={post.post_image_url} date_time_added={post.date_time_added} />
            })
        )
    }

    getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        let { posts, page } = this.state;
        if(posts.length === 0) {
            return <Loading />
        }
        return (
            <section className="feed container">
                {this.buildFeedPosts(posts)}
                <Pagination page={page} />
            </section>
        )
    }
}

export default Feed;