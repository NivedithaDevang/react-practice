import axios from 'axios';
import { useState } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/posts";
//get API
const Get = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios
        .get(baseURL)
        .then((response) => console.log("Response : ", response))
        .catch((err) => console.error(err));
    };

    return (
        <div>
            <button onClick={getData}>Get Data</button>
        </div>
    );
};



//Post
const Post = () => {
    const handlePost = () => {
        const newPost = { title: "Test Title", body: "Test Body" };

        axios
            .post(baseURL, newPost)
            .then((res) => console.log("response : ", res))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <button onClick={handlePost}>Send POST Request</button>
        </div>
    );
};


//put
const Put = () =>{
    const handlePut = () =>{
        const updated = {title : "Updated", body : "This is updated"};
        axios
        .put(`${baseURL}/1`, updated)
        .then((res) => {
            console.log("Updated: ", res.data);
        })
        .catch((err) => console.log(err));
    }

    return(
        <div>
            <button onClick={handlePut}>Put request</button>
        </div>
    )
}

//delete
function DeletePost() {
        const [post, setPost] = useState(true);

        const deletePost = () => {
                axios
                        .delete(`${baseURL}/1`)
                        .then(() => {
                                console.log("Post deleted!");
                                setPost(false);
                        })
                        .catch((err) => console.error(err));
        };

        return (
                <div>
                        <button onClick={deletePost}>Delete Post</button>
                </div>
        );
}


export { Get, Post, Put, DeletePost };