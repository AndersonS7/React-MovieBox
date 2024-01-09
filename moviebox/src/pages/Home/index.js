import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../Components/Button";
// import useAuth from "../../hooks/useAuth";
// import * as C from "./style";

import Footer from '../../Components/Footer/Footer.js';
import Feed from '../../Components/SectionFeed/Feed.js';
import SectionTop from '../../Components/SectionTop/SectionTop.js';

const Home = () => {
    

    return (
        <>
            <SectionTop />
            <Feed />
            <Footer />
        </>
    );
};

export default Home;