import React, {Component} from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import {FiBell} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'

class StudentProfile extends Component {
    render() {
        return (

            <div>
            <div className="profileuser">
                <div className="card loction-user">
                    <div className="card-block p-0">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <img className="img-fluid rounded-circle media-object img-radius"  src="../assets/images/user/avatar-1.jpg" alt="dashboard-user"/>
                            </div>
                            <div className="col">
                                <h6 className="stuprowelback">Welcome Back,</h6>
                                <h5>Ann Doe</h5>
                                <span className="stugrade">4th Grade</span>
                            </div>
                        </div>
                        
                        <div className="border-top"></div>
                        <div className="loction-progress">
                            <h6 className="profiletxt"><a href="stu_grade" style={{color:"#20cbcf"}}>View Grades</a> <br/>Student Resources <i className="icon feather prolock"><FiLock/></i><span className="float-right"><i className="icon feather studenticon m-r-10"><FiBell/></i><i className="icon-bubbles studenticon"></i></span></h6>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card user-list">
                    <div className="card-header">
                        <h5>Upcoming Assignments</h5>
                        <div className="card-header-right">
                            <div className="btn-group card-option">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-more-horizontal"></i>
                                </button>
                                <ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item full-card"><a href="#!"><span><i className="feather icon-maximize"></i> maximize</span><span className="displayNoneStyle"><i className="feather icon-minimize"></i> Restore</span></a></li>
                                    <li className="dropdown-item minimize-card"><a href="#!"><span><i className="feather icon-minus"></i> collapse</span><span className="displayNoneStyle"><i className="feather icon-plus"></i> expand</span></a></li>
                                    <li className="dropdown-item reload-card"><a href="#!"><i className="feather icon-refresh-cw"></i> reload</a></li>
                                    <li className="dropdown-item close-card"><a href="#!"><i className="feather icon-trash"></i> remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-block stuprofile_card">
                        <div className="stuasshead">
                            <div className="">Assignment <span className="float-right">Due Date</span></div>
                        </div>
                        <div className="stuasstxt">
                            <a href="Stu_energy_assignment"><div className="" style={{color:"#20cbcf"}}>Use Of Energy Assessment <span className="float-right">10th Sep 2020</span></div></a>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Circuit Interactive Lab <span className="float-right">15th Oct 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Writing Science <span className="float-right">21st Nov 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Claim Evidence Reasoning <span className="float-right">20th Dec 2020</span></div>
                        </div>
                        <div className="stuasstxt">
                            <div className="">Science Rock <span className="float-right">10th Jan 2021</span></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <div className="card-block stuprofile_card">
                        <div className="row" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="stuprofileitem">
                                    <div className=""><i className="icon-pencil"></i> Edit Profile</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock1">
                                    <i className="feather"><FiLock/></i>
                                </div>
                            </div>
                        </div>
                        <div className="row" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="stuprofileitem">
                                    <div className=""><i className="ti-settings"></i> Settings</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock1">
                                    <i className="feather"><FiLock/></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <a href="logout.php">
                                <div className="stuprofileitem">
                                    <div className=""><i className="icon-logout"></i> Logout</div>
                                </div>
                                </a>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
        
        </div>
        );
        
    }
}

export default StudentProfile