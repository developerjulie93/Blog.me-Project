import mongoose, {Schema} from 'mongoose';

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