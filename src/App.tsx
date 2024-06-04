import CompoundHeader from "./components/CompoundHeader";
import SimpleHeader from "./components/SimpleHeader";
import { navItems } from "./constants/navItems";

function App() {
    return (
        <>
            <SimpleHeader
                showTopBanner={true}
                topBannerText={"simple component"}
                topBannerLogo={"/react.svg"}
                showAppLogo={true}
                appLogoUrl={"/vite.svg"}
                appLogoAltText={"logo"}
                showNavItems={true}
                showSearchIcon={true}
                showCartIcon={true}
                showFavouriteIcon={true}
                showUserAvatar={true}
                showLogoutIcon={true}
            />
            <CompoundHeader>
                <CompoundHeader.TopBanner show={true}>
                    <img className="h-7" src="/react.svg" alt="banner" />
                    <p>Compound Component</p>
                </CompoundHeader.TopBanner>
                <div className="flex items-center gap-40">
                    <CompoundHeader.AppLogo show={true}>
                        <img
                            className="h-12  w-12"
                            src={"/vite.svg"}
                            alt={"logo"}
                        />
                    </CompoundHeader.AppLogo>
                    <div className="flex justify-between items-center w-full px-4">
                        <CompoundHeader.NavItems show={true}>
                            <ul className="flex text-white text-medium uppercase gap-10">
                                {navItems.map((item) => (
                                    <li key={item.name}>{item.name}</li>
                                ))}
                            </ul>
                        </CompoundHeader.NavItems>
                        <div>
                            <CompoundHeader.UserAvatar show={true} />
                        </div>
                    </div>
                </div>
            </CompoundHeader>
        </>
    );
}

export default App;
