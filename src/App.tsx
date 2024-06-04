import SimpleHeader from "./components/SimpleHeader";

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
        </>
    );
}

export default App;
