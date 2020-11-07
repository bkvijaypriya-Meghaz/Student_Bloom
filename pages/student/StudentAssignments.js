import React, {Component} from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import {FiLock} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {ASSIGNMENT_INFORMATION} from '../../components/ConstFile';


export default function StudentAssignments() {
    const [studentAssignments, setStudentAssignments] = useState(0);
    const [assignmentList, setAssignmentList] = useState([]);
    useEffect(() => {
        getInfo(ASSIGNMENT_INFORMATION).then((data) => {
            // console.log('bloom data is : ',data);
            // console.log('first name is : ',data.firstName);
            // console.log('last name is : ',data.lastName);
           
            setStudentAssignments(data);
            setAssignmentList(data.assignments);
        })
    }, [])
     return (
        <div>
            <div className="">
                <div className="card">
                    <div className="card-header">
                        <h5>Ms. {studentAssignments.lastName} {studentAssignments.firstName} 's {studentAssignments.section}</h5>
                    </div>
                    <div className="card-block stuprofile_card scrollpart">
                    {/* if(this.props.assign=='Yes') {
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
                        {
                            assignmentList.map((assignment)=>(
                            <div className="card cardshadow">
                                <div className="card-block stuprofile_card">
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div className="postpercent">
                                                <div data-label="100% completed" className="radial-bar radial-bar-100 radial-bar-lg m-b-0"></div></div>
                                        </div>
                                        <div className="col-xl-9">
                                            <div className="posttitle">{assignment.name}</div>
                                            <div className="postdesc">Assignment Assigned on : {assignment.assignDate}</div>
                                            <div className="duedatebtn">
                                                <button type="button" className="btn btn-primary btn-sm">
                                                    Due Date : {assignment.dueDate}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                        {/* Sample code what we got from bloom legacy - as there was some chart implementation and not the thumbnail */}
                        {/* <div className="card cardshadow">
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

                       */}
                    </div> 
                </div>
            </div>
        </div>
    )
}