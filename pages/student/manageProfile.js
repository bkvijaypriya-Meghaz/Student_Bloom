import React, { Component } from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import { FiBell } from 'react-icons/fi'
import { FiLock } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {STUDENT_PROFILE_URL} from '../../components/ConstFile';
import Link from 'next/link'

function manageProfile(){
    const [studentList, setStudentList] = useState(0);
    const [studentid, setStudentid]  = useState(0);
    useEffect(() => {
        getInfo(STUDENT_PROFILE_URL).then((data) => {
            console.log('ManageProfile - bloom data is : ',data);
            
            setStudentList(data);
            setStudentid(data.studentId);
        })
    }, [])
    console.log("In ManageProfile.js student id is : ",studentid);
    return (
        <div>
            <div className="">
                <div className="card">
                    <div className="card-block stuprofile_card">
                        <div className="row" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="stuprofileitem">
                                    <div>
                                        <Link href={`/student/${studentid}/edit_profile`}>
                                            <a href="#">
                                                <i className="icon-pencil"></i> Edit Profile
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                {/* <div className="studashlock1">
                                    <i className="feather"><FiLock /></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="row" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="stuprofileitem">
                                    <div className="">
                                        <Link href={`/student/${studentid}/settings`}>
                                            <a href="#">
                                                <i className="ti-settings"></i> Settings
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                {/* <div className="studashlock1">
                                    <i className="feather"><FiLock /></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <a href="sign-in">
                                    <div className="stuprofileitem">
                                        <div className="">
                                            <Link href={`/student/student-sign-in`}>
                                                <a href="#">
                                                    <i className="icon-logout"></i> Logout
                                                </a>
                                            </Link>
                                        </div>
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

export default manageProfile;