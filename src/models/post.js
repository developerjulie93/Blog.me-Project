import mongoose, {Schema} from 'mongoose';

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //string array
    publishedDate: {
        type: Date,
        default: Date.now, //default: current date, time
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;