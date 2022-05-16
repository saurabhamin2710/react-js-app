import React, { useEffect, useState } from 'react'
import '../Pagecss/Hostuser.css'
import Sidebar from './Sidebar';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMdContact } from 'react-icons/io';
import axios from 'axios';
function Hostuser(props) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (post && props.id === post.id) {
            return;
        }
        getPostDetails();
    }, []);
    const headers = { 'key': 'RJiYTyA1JraHigoISu7LuGvcNFeHGfgy' };
    async function getPostDetails() {
        axios.get(`http://milolivevideostreaming.ddns.net:50683/agency/hostlist/6213690dc3b1593d6cf199e5`, { headers: headers })
            .then((response) => {
                setPost({ ...response.data.data, id: "6213690dc3b1593d6cf199e5" });
                console.log(response.data.data);
            });
    }
    if (post) {
        var result = Object.keys(post).map((key) => [Number(key), post[key]]);
        // let arraylist = Object.entries(post);
        //console.log(arraylist);
    }
    if (post) {
        return (
            <div className='Hostuser'>
                <div><Sidebar /></div>
                <div>
                    <IoIosNotificationsOutline className='noty' />
                    <div className='adm'>
                        <IoMdContact size={25} />Hello,<b>{result[0][1].agency}</b>
                    </div>
                </div><br /><br />
                <hr />
                <h2 className='user'>Users</h2>
                <select name="Types" id="dropdown">
                    <option defaultValue={true} value="Host-Type">Host-Type</option>
                    <option value="User-Type">User-Type</option>
                </select>
                <div className="table">
                    <table>
                        <thead>
                            <tr className='headrow'>
                                <th>Name</th>
                                <th>Bio</th>
                                <th>Coin</th>
                                <th>Country</th>
                                <th>Redeem Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align='left'>
                                    <img
                                        src={result[0][1].host_id.image}
                                        alt="new"
                                        height={50}
                                        width={50}
                                        borderRadius={10}
                                    />
                                    &nbsp;&nbsp;{result[0][1].host_id.username}</td>
                                <td>{result[0][1].host_id.bio}</td>
                                <td>{result[0][1].host_id.coin}</td>
                                <td>{result[0][1].host_id.country}</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td align='left'>
                                    <img
                                        src={result[1][1].host_id.image}
                                        alt="new"
                                        height={50}
                                        width={50}
                                        borderRadius={10}
                                        border-radius={50}
                                        justifyContent='center'
                                    />
                                    &nbsp;&nbsp;{result[1][1].host_id.username}</td>
                                <td>{result[1][1].host_id.bio}</td>
                                <td>{result[1][1].host_id.coin}</td>
                                <td>{result[1][1].host_id.country}</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td align='left'>
                                    <img
                                        src={result[2][1].host_id.image}
                                        alt="new"
                                        height={50}
                                        width={50}
                                        borderRadius={10}
                                    />
                                    &nbsp;&nbsp;{result[2][1].host_id.username}</td>
                                <td>{result[2][1].host_id.bio}</td>
                                <td>{result[2][1].host_id.coin}</td>
                                <td>{result[2][1].host_id.country}</td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Hostuser