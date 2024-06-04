import { CircleUser } from "lucide-react";
import { FC, ReactNode } from "react";

type PropTypes = {
    children: ReactNode;
};

const CompoundHeader: FC<PropTypes> & {
    TopBanner: FC<{ children: ReactNode; show: boolean }>;
    AppLogo: FC<{ children: ReactNode; show: boolean }>;
    NavItems: FC<{ children: ReactNode; show: boolean }>;
    UserAvatar: FC<{ show: boolean }>;
} = ({ children }) => {
    return <div className="bg-zinc-700">{children}</div>;
};

const TopBanner: FC<{ children: ReactNode; show: boolean }> = ({
    children,
    show,
}) => {
    if (!show) return null;

    return (
        <div className="flex justify-center items-center text-white gap-3 px-4 py-2 bg-pink-700">
            {children}
        </div>
    );
};

const AppLogo: FC<{ children: ReactNode; show: boolean }> = ({
    children,
    show,
}) => {
    return show && <div className="py-3 px-2">{children}</div>;
};

const NavItems: FC<{ children: ReactNode; show: boolean }> = ({
    children,
    show,
}) => {
    return show && <>{children}</>;
};

const UserAvatar: FC<{ show: boolean }> = ({ show }) => {
    return <>{show && <CircleUser className="h-7 w-7" color="white" />}</>;
};

CompoundHeader.TopBanner = TopBanner;
CompoundHeader.AppLogo = AppLogo;
CompoundHeader.NavItems = NavItems;
CompoundHeader.UserAvatar = UserAvatar;

export default CompoundHeader;
