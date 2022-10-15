import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import Main from "../components/Homepage/Body";
import {Drawer } from 'antd';
function Author(props) {
    return (
        <>
            <AuthorHeader />
            <div className="homepage_body">
                <Channels />
                <Main show={props}/>
            </div>
            
        </>
    )
}
export default Author;