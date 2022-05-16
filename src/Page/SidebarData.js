// import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { IoMdContacts } from 'react-icons/io';
export const SidebarData = [
    {
        title: "Dashboard",
        icon: <AiFillHome />,
        link: "/dashboard"
    },
    {
        title: "Host User",
        icon: <IoMdContacts />,
        link: "/hostuser"
    },
    {
        title: "My Profile",
        icon: <IoMdContact />,
        link: "/myprofile"
    }
]