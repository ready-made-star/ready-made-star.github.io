import ProfileCard from "./ProfileCard";
import AvatarGroup from "./AvatarGroup";
import CardGroup from "./CardGroup";

function Header() {
    return (
        <div className='main'>
            <ProfileCard />
            <AvatarGroup />
            <CardGroup />
        </div>
    )
}
export default Header;