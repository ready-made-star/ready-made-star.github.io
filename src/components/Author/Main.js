import ProfileCard from "./ProfileCard";
import AvatarGroup from "./AvatarGroup";
import CardGroup from "./CardGroup";
import Location from "./Location";
import Creators from "./Creators";

function Header() {
    return (
        <div className='main'>
            <div className="main_first_part">
                <div>
                    <ProfileCard />
                </div>
                <div className="main_second_part mobile_version">
                    <Location />
                    <Creators />
                </div>
                <div>
                    <AvatarGroup />
                </div>
                <div style={{ flex: 1, overflow: "auto" }} className='scroll'>
                    <CardGroup />
                </div>
            </div>
            <div className="main_second_part desktop_version">
                <Location />
                <Creators />
            </div>
        </div>
    )
}
export default Header;