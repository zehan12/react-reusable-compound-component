import SearchIcon from "./SearchIcon";
import { navItems } from "../../constants/navItems";
import AppLogo from "./AppLogo";
import TopBanner from "./TopBanner";
import CartIcon from "./CartIcon";
import FavrouiteIcon from "./FavrouiteIcon";
import LogoutIcon from "./Logout";
import UserAvatar from "./UserAvatar";
import { FC } from "react";

type SimpleHeaderProps = {
    showTopBanner: boolean;
    topBannerText: string;
    topBannerLogo: string;
    showAppLogo: boolean;
    appLogoUrl: string;
    appLogoAltText: string;
    showNavItems: boolean;
    showSearchIcon: boolean;
    showCartIcon: boolean;
    showFavouriteIcon: boolean;
    showUserAvatar: boolean;
    showLogoutIcon: boolean;
};

const SimpleHeader: FC<SimpleHeaderProps> = ({
    showTopBanner,
    topBannerText,
    topBannerLogo,
    showAppLogo,
    appLogoUrl,
    appLogoAltText,
    showNavItems,
    showSearchIcon,
    showCartIcon,
    showFavouriteIcon,
    showUserAvatar,
    showLogoutIcon,
}) => {
    return (
        <header className="">
            {showTopBanner && (
                <TopBanner text={topBannerText} img={topBannerLogo} />
            )}
            <div className="flex items-center bg-zinc-700 px-4 py-3 gap-40">
                {showAppLogo && (
                    <AppLogo imgUrl={appLogoUrl} altText={appLogoAltText} />
                )}
                <div className="flex justify-between w-full">
                    <ul className="flex justify-evenly gap-7 h-7 w-80">
                        {showNavItems &&
                            navItems &&
                            navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="text-white text-medium uppercase"
                                >
                                    {item.name}
                                </li>
                            ))}
                    </ul>
                    <div className="flex gap-10">
                        {showSearchIcon && <SearchIcon />}
                        {showCartIcon && <CartIcon />}
                        {showFavouriteIcon && <FavrouiteIcon />}
                        {showUserAvatar && <UserAvatar />}
                        {showLogoutIcon && <LogoutIcon />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SimpleHeader;
