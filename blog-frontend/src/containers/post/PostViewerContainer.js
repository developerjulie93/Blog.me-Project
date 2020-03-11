import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import { withRouter } from 'react-router-dom';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer=({match, history})=>{
    const {postId} = match.params;
    const dispatch = useDispatch();
    const {post, error, loading, user} = useSelector(({post, loading, user}) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        user: user.user,
    }));
    
    useEffect(()=>{
        dispatch(readPost(postId));

        return()=>{
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    const onEdit = () =>{
        dispatch(setOriginalPost(post));
        history.push('/write');
    };
    const onRemove = async () =>{
        try{
            await removePost(postId);
            history.push('/'); //포스트가 삭제되었으니 홈으로 다시 돌아감
        }catch (e){
            console.log(e);
        }
    };
    const ownPost = (user && user._id) === (post && post.user._id);

    return (
        <PostViewer 
            post={post} 
            error={error} 
            loading={loading} 
            actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove}/>}>
        </PostViewer>
    );
};
export default withRouter(PostViewerContainer);