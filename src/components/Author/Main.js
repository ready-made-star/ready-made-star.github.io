import ProfileCard from "./ProfileCard";
import AvatarGroup from "./AvatarGroup";
import CardGroup from "./CardGroup";
import Location from "./Location";
import Creators from "./Creators";

function Header() {
    return (
        <div className='main'>
            <div style={{ display: 'flex', height: '82.81vh', gap: '5%'}}>
                <div style={{width:'75%', display: 'flex', flexDirection:'column'}}>
                    <div>
                    <ProfileCard />
                    </div>
                    <div>
                    <AvatarGroup />
                    </div>
                    <div style={{flex: 1, overflow: "auto"}} className='scroll'>
                        <CardGroup />
                    </div>
                </div>
                <div style={{width:'20%'}}>
                    <Location />
                    <Creators />
                </div>
            </div>
        </div>
    )
}
export default Header;