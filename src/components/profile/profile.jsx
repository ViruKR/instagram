import React from "react";
import SideBAr from "../common/SideBAr";
import Header from "./Header";
import { myInfo } from "../../data/myinfo";
import MyPost from "./MyPost";
const Profile = () => {
    return (
        <div style={{ display: "flex", gap: "10vw" }}>

            <SideBAr />
            <div>
                <Header myInfo={myInfo} />
                <MyPost post={myInfo.posts}/>
            </div>
        </div>
    )
}
export default Profile