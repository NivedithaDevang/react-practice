import './Dashboard.css';
import { FaMicrophone, FaLightbulb, FaPalette, FaBrain } from "react-icons/fa";
function Dashboard() {
    return (
        <div className="dashboard">

            {/* LEFT SIDE */}
            <div className="dashboard-left">

                {/* COURSES */}
                <section className="dashboard-section">
                    <h2>YOUR COURSES</h2>

                    <div className="course-cards">
                        <div className="course-card">
                            <h3>AI IN PYTHON</h3>
                        </div>

                        <div className="course-card">
                            <h3>DATA ANALYTICS</h3>
                        </div>

                        <div className="course-card">
                            <h3>FIGMA</h3>
                        </div>
                    </div>
                </section>


                {/* ASSIGNMENTS */}
                <section className="assignment-section">

                    <h2 className="assignment-title">
                        ASSIGNMENTS
                    </h2>

                    <div className="assignment-cards">

                        <div className="assignment-card">
                            <h3>Pending</h3>
                            <span>20</span>
                        </div>

                        <div className="assignment-card">
                            <h3>Submitted</h3>
                            <span>7</span>
                        </div>

                        <div className="assignment-card">
                            <h3>Overdue</h3>
                            <span>2</span>
                        </div>

                        <div className="assignment-card">
                            <h3>Due Soon</h3>
                            <span>4</span>
                        </div>

                    </div>

                </section>

                <section className="attendance-section">

    <h2>ATTENDANCE</h2>

    <div className="attendance-card">

        <div className="attendance-item">
            <span>AI in Python</span>
            <strong>92%</strong>
        </div>

        <div className="attendance-bar">
            <div className="attendance-progress" style={{ width: "92%" }}></div>
        </div>


        <div className="attendance-item">
            <span>Data Analytics</span>
            <strong>85%</strong>
        </div>

        <div className="attendance-bar">
            <div className="attendance-progress" style={{ width: "85%" }}></div>
        </div>


        <div className="attendance-item">
            <span>Figma for Everyone</span>
            <strong>78%</strong>
        </div>

        <div className="attendance-bar">
            <div className="attendance-progress" style={{ width: "78%" }}></div>
        </div>

    </div>

</section>

            </div>

            {/* RIGHT SIDE OF THE DASHBOARD*/}
            <div className='dashboard-right'>
                <section className="quick-stats-section">
        <h2>QUICK STATS</h2>

        <div className="quick-stats-card">

            <div className="stat">
                <span>Courses</span>
                <strong>3</strong>
            </div>

            <div className="stat">
                <span>Assignments</span>
                <strong>27</strong>
            </div>

            <div className="stat">
                <span>Completed</span>
                <strong>20</strong>
            </div>

            <div className="stat">
                <span>Avg. Attendance</span>
                <strong>85%</strong>
            </div>

        </div>
    </section>



    
                 <section className="highlights-section">

        <h2>THIS WEEK'S HIGHLIGHTS</h2>

        <div className="highlights-card">

            <div className="highlight-item">
                <span className="highlight-icon">
                    
                    <FaMicrophone />                    

                </span>
                <div className = "hightlight-content">

                <div className = "highlight-heading">
                    <h3>AI in Healthcare</h3>
                            <span>July 21 • 10:00 AM</span>
</div>
                 <p>Presentation</p>
                </div>
            </div>

            <div className="highlight-item">
                <span className="highlight-icon">
                    <FaLightbulb />
                </span>
                <div className = "hightlight-content">

                <div className = "highlight-heading">
                    <h3>LLM Workshop</h3>
                      <span>Aug 01 • 11:30 AM</span><br></br>
                </div>

                    <p>Hands-on Workshop</p>
            </div>
            </div>

            <div className="highlight-item">
                <span className="highlight-icon">
                    <FaPalette />
                </span>
                <div className = "hightlight-content">

                <div className = "highlight-heading">
                    <h3>UI/UX Design Session</h3>
                   <span>Aug 10 • 10:00 AM</span><br></br>
                </div>

                    <p>Interactive Session</p>
            </div>
            </div>

            <div className="highlight-item">
                <span className="highlight-icon">
                    <FaBrain />
                </span>
                <div className = "hightlight-content">

                <div className = "highlight-heading">
                    <h3>Data Analytics Seminar</h3><br></br>
                     <span>Sep 02 • 12:00 PM</span>
                </div>
                    <p>Guest Lecture</p>
            </div>
</div>
        </div>


    </section>



            </div>
           
        </div>
    );
}

export default Dashboard;