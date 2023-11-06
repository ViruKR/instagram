import React from "react";

import "../../styles/sidebar.css"

const SideBAr = () => {
    return (
        <div className="sidebarContainer">
            <ul >
                <li><img width="100px" src="data:image/png;base64,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" /></li>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Message</li>
                <li>Notification</li>
                <li>Create</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}

export default SideBAr