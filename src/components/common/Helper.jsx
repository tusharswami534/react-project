import { DashBoardIcon, DashboardIconTwo, EventIcon, OnDemandIcon, ProgrammeIcon } from "./Icons";

export const SIDE_BAR_DATA  =[
    {   
        tabIcon : <DashBoardIcon/>,
        tabName : "Dashboard",
        id : 'tab-one'
    },
    {   
        tabIcon : <EventIcon/>,
        tabName : "Events",
        id : 'tab-two'
    },
    {   
        tabIcon : <OnDemandIcon/>,
        tabName : "on demand",
        id : 'tab-three'
    },
    {   
        tabIcon : <ProgrammeIcon/>,
        tabName : "Programmes",
        id : 'tab-four'
    },
]

export const TAB_Link  =[
    {
        tabLink : "/dashboard",
        tabName : "Help"
    },
    {
        tabLink : "/dashboard",
        tabName : "Contact us",
    },
    {
        tabLink : "/",
        tabName : "Log out",
    },

]
export const DashBoard_Icon = [
    {
    logoLink : '/dashboard',
    logoIcon : <DashboardIconTwo/>
    }
]
export const Navbar_Data = [
    {
        NavLink : '/',
        NavName : 'Home'
    },
    {
        NavLink : '/second',
        NavName : 'second'
    },
    {
        NavLink : '/dashboard',
        NavName : 'dashboard'
    }
] 