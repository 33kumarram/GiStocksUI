import classNames from "classnames";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CommentIcon from "@mui/icons-material/Comment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  const wrapperClasses = classNames(
    "h-screen bg-primary text-white px-4 pt-8 pb-4 mr-0px flex gap-4 flex-col w-70",
    {
      ["w:80"]: !toggleCollapse,
      ["w:20"]: toggleCollapse,
    },
    {
      hidden: toggleCollapse,
    }
  );

  const rowClass = classNames(
    "flex flex-row gap-2 align-center w-90 cursor-pointer"
  );

  return (
    <div className="w-80 flex flex-row gap-0">
      <div className={wrapperClasses}>
        <div className={rowClass}>
          <PersonIcon />
          Hello, user
          <NotificationsIcon className="ml-auto" />
        </div>
        <hr className="w-100" />
        <div className={rowClass}>
          <CommentIcon />
          Discussion, Fourm
        </div>
        <div className={rowClass}>
          <MonetizationOnIcon />
          Market stories
        </div>
      </div>
      <div className="h-screen w-10 flex flex-column items-center">
        <button
          className="bg-primary w-5 h-20 rounded-e text-white"
          onClick={() => setToggleCollapse(!toggleCollapse)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
