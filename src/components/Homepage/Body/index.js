import ProfileCard from "../ProductCard";
import AvatarGroup from "../AvatarGroup";
import CardGroup from "../CardGroup";
import Banner from "../Banner";
import FullscreenView from '../FullscreenView';
import {Routes, Route} from 'react-router-dom';

function GridView(props) {
    return (
        <>
            <Banner />
            <div style={{ flex: 1, overflow: "auto" }} className='scroll'>
                <CardGroup show={props.show} />
            </div>
        </>
    )
}
function Header() {
    return (
        <div className='home_main'>
            <div className="main_first_part" style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    <AvatarGroup />
                </div>

                <Routes>
                    <Route element={<GridView />} path="/" />
                    <Route element={<FullscreenView />} path="/fullscreenview" />
                </Routes>

            </div>
        </div>
    )
}
export default Header;