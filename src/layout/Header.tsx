import "./Header.css";
import UnimateLogo from "../assets/image/UniMate-Logo-05 1.png";
import ButtonRedirectOutline from "../components/ButtonRedirectOutline/ButtonRedirectOutline";
import {useNavigate} from "react-router-dom";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {AlignJustify} from "lucide-react";

const Header = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("");
    };

    const navigateToBlog = () => {
        navigate("/blog");
    };

    const navigateToSignUp = () => {
        navigate("/signup");
    };


    return (
        <div className="header-section">
            <div className="header-wrapper">
                <div className="logo-wrapper" onClick={navigateToHome}>
                    <img src={UnimateLogo} alt=""/>
                    <span className="header-title">
            <i>
              Uni<span className="header-title-bold color-blue-bell">Mate</span>
            </i>
          </span>
                </div>
                <div className="menu">
                    <div className="menu-item">About</div>
                    <div className="menu-item" onClick={navigateToBlog}>
                        Blog
                    </div>


                    <div className="menu-item">Contact</div>
                    <div className="menu-item" onClick={navigateToSignUp}>
                        <span style={{textDecoration: "none"}}>Sign Up</span>
                    </div>
                    <div className="menu-item">
                        <ButtonRedirectOutline text="Sign In" url="/signin"/>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="block relative lg:hidden"><AlignJustify/></DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute top-10 right-0 w-96">
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>About</DropdownMenuItem>
                            <DropdownMenuItem>Blog</DropdownMenuItem>
                            <DropdownMenuItem className="text-purple-600 font-bold">Sign in</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </div>
        </div>
    );
};

export default Header;
