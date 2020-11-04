import React, { Component } from 'react';
import { FiLock } from 'react-icons/fi';
import {MY_TEACHER_INFO} from './ConstFile';
import {useState, useEffect} from 'react'
import {getInfo} from '../../services/GenericServices';

export default function studentsTeacher() {

    const [myTeacherInfo, setMyTeacherInfo] = useState(0);

    useEffect(() => {
        getInfo(MY_TEACHER_INFO).then((data) => {
            // console.log('bloom data is : ',data);
            // console.log('bloom data is : ',data.lastName);
            // console.log('bloom data is : ',data.firstName);
            setMyTeacherInfo(data);
        })
    }, [])

    return (
        <div className="">
            <div className="card">
                <div className="card-header">
                    <h5>My Teacher</h5>
                </div>
                <div className="card-block stuprofile_card">
                    <div className="teacherimg"> 
                        <span data-toggle="tooltip" data-html="true" data-placement="bottom" title="Ms. Jane Doe">
                                {myTeacherInfo.lastName}{myTeacherInfo.firstName}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

