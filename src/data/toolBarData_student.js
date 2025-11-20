import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const toolBarData = [
  {
    title: "My profile",
    icon:<AccountCircleIcon/>,
    link:"/student/profile"
  },
  {
    title: "Favorites",
    icon:<FavoriteBorderIcon/>,
    link:"/favorites"
  },
  {
   title: "Calendar",
    icon:<CalendarTodayIcon/>,
    link:"/general-calendar"
  },
  {
   title: "Support",
    icon:<ContactSupportIcon/>,
    link:"/support"
  },
];

