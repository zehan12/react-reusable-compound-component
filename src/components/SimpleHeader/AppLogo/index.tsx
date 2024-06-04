import { FC } from "react";

type AppLogoProps = {
    imgUrl: string;
    altText: string;
};

const AppLogo: FC<AppLogoProps> = ({ imgUrl, altText }) => {
    return (
        <div>
            <img className="h-14  w-14" src={imgUrl} alt={altText} />
        </div>
    );
};

export default AppLogo;
