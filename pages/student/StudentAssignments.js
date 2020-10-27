import React, {Component} from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import {FiLock} from 'react-icons/fi'

class StudentAssignments extends Component {

    render() {
        return (

            <div>
            <div className="">
                <div className="card">
                    <div className="card-header">
                        <h5>Ms. Jane Doe's 4th Grade Science className</h5>
                    </div>
                    <div className="card-block stuprofile_card scrollpart">
{/*                         if(this.props.assign=='Yes') {
                            <>
                            <div className="card cardshadow">
                                <div className="card-block stuprofile_card">
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div className="postpercent"><div data-label="0% completed" className="radial-bar radial-bar-0 radial-bar-lg m-b-0"></div></div>
                                        </div>
                                        <div className="col-xl-9">
                                            <div className="posttitle">Energy</div>
                                            <div className="postdesc">Assignment Duration : 30 Mins</div>
                                            <div className="savebtn"><button type="button" className="btn btn-primary btn-sm"><i className="feather icon-play"></i>Join className</button></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="card cardshadow">
                                <div className="card-block nopadding">
                                    <div className="row nomargin">
                                        <div className="col-xl-4 nopadding">
                                            <div className="postimg"><img src="images/stuenergy.jpeg"/></div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="postinfo">Posted 2 hours ago by <b>John Doe</b></div>
                                            <div className="posttitle">Use Of Energy Assessment</div>
                                            <div className="postdesc">Duration : 15 Minutes</div>
                                            <div className="postdesc">Topic : Patterns, Cause and Effect, Energy and Matter</div>
                                            <div className="savebtn"><a href="energy_assignment.php"><button type="button" className="btn btn-primary btn-sm">Start Assessment</button></a></div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            </>
                        } */}
                        <div className="card cardshadow">
                            <div className="card-block stuprofile_card">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="postpercent"><div data-label="0% completed" className="radial-bar radial-bar-0 radial-bar-lg m-b-0"></div></div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="posttitle">New Photosynthesis Assignment</div>
                                        <div className="postdesc">Assignment Assigned on : 10th July 2020</div>
                                        <div className="duedatebtn"><button type="button" className="btn btn-primary btn-sm">Due Date : 20th Nov 2020</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="card cardshadow">
                            <div className="card-block stuprofile_card">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="postpercent1"><div data-label="100%" className="radial-bar radial-bar-100 radial-bar-lg m-b-0"></div></div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="posttitle">Chemistry Assignment Graded</div>
                                        <div className="postdesc">Assignment Graded on : 21st July 2020</div>
                                        <div className="duedatebtn"><button type="button" className="btn btn-primary btn-sm">View Grades</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card cardshadow">
                            <div className="card-block stuprofile_card">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="postpercent"><div data-label="0% completed" className="radial-bar radial-bar-0 radial-bar-lg m-b-0"></div></div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="row">
                                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                                <div className="posttitle">Writing Science</div>
                                            </div>
                                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                                <div className="studashlock">
                                                    <i className="feather"><FiLock/></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="postdesc">Assignment Assigned on : 10th Jan 2021</div>
                                        <div className="duedatebtn"><button type="button" className="btn btn-primary btn-sm">Due Date : 15th Mar 2021</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card cardshadow">
                            <div className="card-block stuprofile_card">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="postpercent"><div data-label="0% completed" className="radial-bar radial-bar-0 radial-bar-lg m-b-0"></div></div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="row">
                                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                                <div className="posttitle">Claim Evidence Reasoning</div>
                                            </div>
                                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                                <div className="studashlock">
                                                    <i className="feather"><FiLock/></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="postdesc">Assignment Assigned on : 20th Apr 2021</div>
                                        <div className="duedatebtn"><button type="button" className="btn btn-primary btn-sm">Due Date : 25th July 2021</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card cardshadow">
                            <div className="card-block stuprofile_card">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <div className="postpercent"><div data-label="0% completed" className="radial-bar radial-bar-0 radial-bar-lg m-b-0"></div></div>
                                    </div>
                                    <div className="col-xl-9">
                                        <div className="row">
                                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                                <div className="posttitle">Science Rock</div>
                                            </div>
                                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                                <div className="studashlock">
                                                    <i className="feather"><FiLock/></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="postdesc">Assignment Assigned on : 7th Aug 2021</div>
                                        <div className="duedatebtn"><button type="button" className="btn btn-primary btn-sm">Due Date : 25th Nov 2021</button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default StudentAssignments;