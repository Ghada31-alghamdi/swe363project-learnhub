import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const toolBarData = [
  {
    title: "My profile",
    icon:<AccountCircleIcon/>,
    link:"/tutor/profile"
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
    {
   title: "Analytics",
    icon:<AssessmentIcon/>,
    link:"/tutor/analytics"
 
  },
  {
   title: "log out",
    icon:<LogoutIcon/>,
    link:"/profile"
 
  },
];

