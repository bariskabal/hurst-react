import React from "react";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Login from "./Login";
import Register from "./Register";
import { useEffect } from "react";

export default function Auth() {

    useEffect(() => {
          document.body.classList.add("bg-dark-white")
    },[])

    return (
        <React.Fragment>
            <Header />
            <HeadingBanner pageName="Registration"/>
            <div className="login-area  pt-80 pb-80">
				<div className="container">
					<div>	
						<div className="row">
							<Login />
                            <Register />
						</div>
					</div>
				</div>
			</div>
            <Footer />
        </React.Fragment>
    )
}