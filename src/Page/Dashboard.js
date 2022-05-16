import React, { useEffect, useState } from 'react'
import '../Pagecss/Dashboard.css'
import Sidebar from './Sidebar'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMdContact } from 'react-icons/io';
import { DashboardData } from './DashboardData';
import axios from 'axios';
function Dashboard(props) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (post && props.id === post.id) {
            return;
        }
        getPostDetails();
    }, []);
    const headers = { 'key': 'RJiYTyA1JraHigoISu7LuGvcNFeHGfgy' };
    async function getPostDetails() {
        axios.get(`http://milolivevideostreaming.ddns.net:50683/agency/profile/6213690dc3b1593d6cf199e5`, { headers: headers })
            .then((response) => {
                setPost({ ...response.data.data, id: "6213690dc3b1593d6cf199e5" });
            });
    }
    if (post) {
        return (
            <>
                <div className='Dashboard'>
                    <div><Sidebar /></div>
                    <div>
                        <IoIosNotificationsOutline className='noty' />
                        <div className='adm'>
                            <IoMdContact size={25} />Hello,<b>{post.name}</b>
                        </div>
                    </div><br /><br /><hr />
                    <div className='weladm'>
                        <h1>Welcome Admin</h1>
                        <h3>Dashboard</h3>
                        <ul className='DashboardList'>
                            {DashboardData.map((val, key) => {
                                return (
                                    <li key={key} className="rowd">
                                        <div id='count'>{val.count}</div>
                                        <div id='icon'>{val.icon}</div>
                                        <br /><br /><div id='title'>{val.title}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard