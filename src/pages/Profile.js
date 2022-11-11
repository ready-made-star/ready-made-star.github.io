import PersonalInfo from "../components/Profile/PersonalInfo";
import PaymentInfo from "../components/Profile/PaymentInfo";
import Orders from "../components/Profile/Orders";
import Favorites from "../components/Profile/Favorites";
import Style from "../components/Profile/Style";
import Passport from "../components/Profile/Passport";
import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import ProfileMenu from "../components/Profile/ProfileMenu";

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function Profile() {
    
    return (
        <>
            <div className="profile_body">
                <Channels />
                <ProfileMenu />
                
                {/* <BrowserRouter> */}
                    <div className="w-100 h-100">
                        <Routes>
                            <Route element={<PersonalInfo />} path="/personalinfo" />
                            <Route element={<PaymentInfo />} path="/paymentinfo" />
                            <Route element={<Orders />} path="/orders" />
                            <Route element={<Favorites />} path="/favorites" />
                            <Route element={<Style />} path="/style" />
                            <Route element={<Passport />} path="/passport" />
                        </Routes>
                    </div>
                    {/* </BrowserRouter> */}
            </div>
        </>
    )
}
export default Profile;