import './Sidebar.css';
import { MdDashboard, MdAssignment, MdClass } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaGraduationCap } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';


function Sidebar(){
const menuItems = [
    { label: 'Dashboard', icon: MdDashboard },
    { label: 'Profile', icon: CgProfile },
    { label: 'Assignments', icon: MdAssignment },
    { label: 'Courses', icon: FaGraduationCap },
    { label: 'Attendance', icon: MdClass },
    { label: 'Logout', icon: RiLoginCircleFill }
];


return(
    <>
    <div className="sidebar">
        <h1>Student Dashboard</h1>
        {menuItems.map((item) => (
            <button key={item.label}>
                <span className="sidebar-icon"><item.icon /></span>
                {item.label}
            </button>
        ))}
    </div>
    </>
);
}


export default Sidebar;