import React from "react";
import "../../styles/post.css";
import { obj as postObject } from "../../data/postdata"

const Post = () => {
    return (
        <div className="postContainer">
            {
                postObject.map(postData => {
                    return <div style={{border:"1px solid grey",padding:"10px 5px",marginBottom:"10px"}}>
                        <div className="postHeader">
                            <img src={`${postData.profilePic}`} width="30px" height="30px" style={{ borderRadius: "50%" }} />
                            <span>{postData.username}</span>
                        </div>
                        <div className="postMain">
                            <img width="100%" src={`${postData.postPic}`} />
                            <span>{postData.likes}likes</span>
                            <span style={{color:"grey",marginBottom:"20px"}}>{postData.aboutpost}</span>
                        </div>
                        <div>
                            {
                                postData.comments.map(comment => {
                                    return <div>
                                        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                            <img width="20px" height="20px" style={{borderRadius:"50%"}} src={`${comment.profilePic}`} />
                                            <span>{comment.username}</span>
                                            <span>{comment.comment}</span>
                                        </div>
                                        <span style={{color:"gray",fontSize:"12px",marginLeft:"10px"}}>{comment.likes}likes</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Post