let postId = 1;

const posts = [
    {
        id: 1,
        title: 'title',
        body: 'content',
    },
];

/*
POST/api/posts
{title, body} */

exports.write = ctx =>{
    const {title, body} = ctx.request.body; //show REST API request body 
    postId += 1;
    const post = {id: postId, title, body}; 
    posts.push(post);
    ctx.body = post;
};

/*
GET/api/posts */

exports.list = ctx =>{
    ctx.body = posts;
};

/* 
GET/api/posts/:id*/

exports.read = ctx =>{
    const {id} = ctx.params;
    const post = posts.find(p => p.id.toString() === id);
    if(!post){ //error
        ctx.status = 404;
        ctx.body = {
            message: 'Not Found Any Post',
        };
        return;
    }
    ctx.body = post;
};

/**
DELETE/api/posts/:id */

exports.remove = ctx =>{
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){ //error
        ctx.status = 404;
        ctx.body = {
            message: 'Not Found Any Post',
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204; //No Content
};

/** Replace
PUT/api/posts/:id*/

exports.replace = ctx =>{
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){ //error
        ctx.status = 404;
        ctx.body = {
            message: 'Not Found Any Post',
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/* Modify
PATCH/api/posts/:id */
 
exports.update = ctx =>{
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){ //error
        ctx.status = 404;
        ctx.body = {
            message: 'Not Found Any Post',
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};