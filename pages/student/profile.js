import React from 'react';
import { FiBell } from 'react-icons/fi'
import { FiLock } from 'react-icons/fi'

function profile() {
    return (
        <div className="profileuser">
        <div className="card loction-user">
            <div className="card-block p-0">
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                        <img className="img-fluid rounded-circle media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="dashboard-user" />
                    </div>
                    <div className="col">
                        <h6 className="stuprowelback">Welcome Back,</h6>
                        <h5>Ann Doe</h5>
                        <span className="stugrade">4th Grade</span>
                    </div>
                </div>
    
                <div className="border-top"></div>
                <div className="loction-progress">
                    <h6 className="profiletxt"><a href="stu_grade" style={{ color: "#20cbcf" }}>View Grades</a> <br />Student Resources <i className="icon feather prolock"><FiLock /></i><span className="float-right"><i className="icon feather studenticon m-r-10"><FiBell /></i><i className="icon-bubbles studenticon"></i></span></h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default profile;