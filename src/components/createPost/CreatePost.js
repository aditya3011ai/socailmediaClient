import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import { BsCardImage } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";
import {useDispatch, useSelector} from 'react-redux';
import { setLoading } from "../../redux/slices/appConfig";
import { getUserProfile } from "../../redux/slices/postSlice";
import './createpost.scss'

function CreatePost() {
    const [postImg, setPostImg] = useState("");
    const [title, setTitle] = useState('')
    const [require, setRequire] = useState(true)
    const dispatch = useDispatch();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (fileReader.readyState === fileReader.DONE) {
                setPostImg(fileReader.result);
            }
        };
    };

    const hanldePostSubmit = async() => {
    
        if(!title || !postImg){
            setRequire(false);
            return;
        }
        dispatch(setLoading(true));
            const result = await axiosClient.post('/posts', {
                title,
                postImg
            })
            console.log('post done', result);
            dispatch(getUserProfile({
                userId: myProfile?._id
            }));
       
            setTitle('');
            setPostImg('');
            setRequire(true);
            dispatch(setLoading(false));
    }

    return (
        <div className="CreatePost">
            <div className="left-part">
                <Avatar src={myProfile?.avatar?.url}/>
            </div>
            <div className="right-part">
                <input
                    value={title}
                    type="text"
                    className="captionInput"
                    placeholder="What's on your mind?"
                    onChange={(e) => setTitle(e.target.value)}
                />
                {postImg && (
                    <div className="img-container">
                        <img
                            className="post-img"
                            src={postImg}
                            alt="post-img"
                        />
                    </div>
                )}

                <div className="bottom-part">
                    <div className="input-post-img">
                        <label htmlFor="inputImg" className="labelImg">
                            <BsCardImage />
                        </label>
                        <input
                            className="inputImg"
                            id="inputImg"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button className="post-btn primary-btn" onClick={hanldePostSubmit}>Post</button>
                  
                </div>
                {!require && <h6 style={{color:'red',marginTop:"5px"}}>*Title and Image are required</h6>}
            </div>
        </div>
    );
}

export default CreatePost;
