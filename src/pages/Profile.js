import PersonalInfo from "../components/Profile/PersonalInfo";
import PaymentInfo from "../components/Profile/PaymentInfo";
import Orders from "../components/Profile/Orders";
import Favorites from "../components/Profile/Favorites";
import Style from "../components/Profile/Style";
import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import ProfileMenu from "../components/Profile/ProfileMenu";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function Profile() {
    
    return (
        <>
            <AuthorHeader />
            <div className="profile_body">
                <Channels />
                <ProfileMenu />
                
                {/* <BrowserRouter> */}
                    <div style={{width: '100%'}}>
                        <Routes>
                            <Route element={<PersonalInfo />} path="/personalinfo" />
                            <Route element={<PaymentInfo />} path="/paymentinfo" />
                            <Route element={<Orders />} path="/orders" />
                            <Route element={<Favorites />} path="/favorites" />
                            <Route element={<Style />} path="/style" />
                        </Routes>
                    </div>
                    {/* </BrowserRouter> */}
            </div>
        </>
    )
}
export default Profile;