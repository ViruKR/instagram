import React from "react";
import SideBAr from "../common/SideBAr";
import Main from "./Main";
import Suggestion from "./Suggestaion";
const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent:"space-between" }}>
            <div>
                <SideBAr />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Suggestion/>
            </div>
        </div>
    )
}

export default Home

