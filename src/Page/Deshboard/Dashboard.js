import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [ admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Deshboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content ">
                    {/* <!-- Sidebar content here --> */}
                    <li className='  font-normal hover:font-bold '><Link to="/Dashboard">My Appointments</Link></li>
                    <li className=' font-normal hover:font-bold'><Link to="/Dashboard/Review">My Reviews</Link></li>
                    <li className=' font-normal hover:font-bold'><Link to="/Dashboard/History">My History</Link></li>
                { admin && <li className=' font-normal hover:font-bold'><Link to="/Dashboard/Users">All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;