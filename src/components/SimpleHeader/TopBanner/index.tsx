import { FC } from "react";

type TopBannerProps = {
    text: string;
    img?: string;
};

const TopBanner: FC<TopBannerProps> = ({ text, img }) => {
    return (
        <div className="flex justify-center items-center text-white gap-3 px-4 py-2 bg-pink-700">
            {img && <img className="w-8 h-8 " src={img} />}
            <p>{text}</p>
        </div>
    );
};

export default TopBanner;
