import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../Pagecss/Myprofile.css'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMdContact } from 'react-icons/io';
import axios from 'axios';
function Myprofile(props) {
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
    // console.log(post);
    if (post) {
        return (
            <div className='myprofile'><Sidebar />
                <div>
                    <IoIosNotificationsOutline className='noty' />
                    <div className='adm'>
                        <IoMdContact size={25} />Hello,<b>{post.name}</b>
                    </div>
                </div><br /><br />
                <hr />
                <div className="userinfo">
                    <h2 className='head'> User Details</h2>
                    <div className='us'>
                        <h3><label htmlFor="name"> Name : </label>{post.name}</h3>
                        <h3><label htmlFor="email"> Email : </label>{post.email}</h3>
                        <h3><label htmlFor="website"> Website : </label>{post.website}</h3>
                        <h3><label htmlFor="country"> Country : </label>{post.country}</h3>
                        <h3><label htmlFor="state"> State : </label>{post.state}</h3>
                        <h3><label htmlFor="noofstre"> No. of Streamers : </label>{post.no_streamers}</h3>
                        <h3><label htmlFor="conntactnumber"> Contact Number : </label>{post.contact_no}</h3>
                        <h3><label htmlFor="designation"> Designation : </label>{post.contact_designation}</h3>
                        <h3> <label htmlFor="experience"> Experience : </label>{post.work_experience}</h3>
                    </div>
                    
                    <h2 className='head'>Bank Details</h2>
                    <div className="bs">

                        <h3><label htmlFor="Acc_number"> Account Number : </label>{post.id}</h3>
                        <h3><label htmlFor="Name"> Account holder Name : </label>{post.name}</h3>
                        <h3><label htmlFor="IFSC_code"> IFSC code : </label>SBI0001223</h3>
                        <h3><label htmlFor="Bank_Name"> Bank Name : </label>SBI</h3>
                    </div>
                </div>
            </div>
        )
    }


}

export default Myprofile