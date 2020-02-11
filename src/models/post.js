import mongoose from 'mongoose';

const {Schema} = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //string array
    publishedDate: {
        type: Date,
        default: Date.now, //default: current date, time
    },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;