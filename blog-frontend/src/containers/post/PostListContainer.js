import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { listPosts } from '../../modules/posts';
import PostList from '../../components/post/PostList';
import { withRouter } from 'react-router-dom';

const PostListContainer = ({location}) => {
    const dispatch = useDispatch();
    const {user, posts, error, loading} = useSelector(
        ({user, posts, loading}) => ({
            posts: posts.posts,
            error: posts.error,
            user: user.user,
            loading: loading['posts/LIST_POSTS'],
        }),
    );

    useEffect(()=>{
        const {username, page, tag} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({username, page, tag}));
    }, [dispatch, location.search]);
    
    return(
        <PostList
            loading={loading}
            showWriteButton={user}
            posts={posts}
            error={error} />
    );
};

export default withRouter(PostListContainer);