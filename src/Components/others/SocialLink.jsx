import { Link } from "react-router-dom";

const SocialLink = ({icon, name='facebook', to='/'}) => {
    return (
        <Link to={to} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-[1px] text-[#A6ADB9] text-xs hover:text-black duration-200">
            {icon} {name}
        </Link>
    );
};

export default SocialLink;