import { FaChevronDown } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-black text-white text-center py-2 text-sm relative">
      Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!&nbsp;
      <a href="#" className="font-bold underline">ShopNow</a>
      <span className="absolute right-10 top-2 flex items-center gap-1">
        English
        <FaChevronDown className="ml-1 text-xs" />
      </span>
    </div>
  );
}