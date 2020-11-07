import React, {Component} from 'react'
import StudentLayout from '../../layout/StudentLayout';
import {useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {GRADE_INFORMATION} from '../../components/ConstFile';


function stugrade(props){
    
    const [headerList, setHeaderList] = useState([]);
    const [studentGradeInfo, setStudentGradeInfo] = useState(0);
    const [gradesList, setGradesList] = useState([]);
    const i=0;
    useEffect(() => {
        getInfo(GRADE_INFORMATION).then((data) => {
            setStudentGradeInfo(data);
            setGradesList(data.grades);
            const headdata = ['Name', "Due Date", "Status", "Score", "Grade", "Feedback"];
            setHeaderList(headdata);
        })
    }, [])

    return(
        <StudentLayout{...props}>
            <div className="pcoded-main-container hidesidebar"> 
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*!-- [ Main Content ] start --*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="row" style={{'border-bottom': "1px solid #f1f1f1"}}>
                                                <div className="col-7">
                                                    <div className="card-header" style={{'border-bottom':'none'}}>
                                                        <h5>My Grades</h5>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="headrytbtn">
                                                        <a href="dashboard"><button type="button" className="btn btn-success">Back to Dashboard</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="card-block stuprofile_card">
                                                <div className="row">
                                                    <div className="col-md-12 col-xl-12">
                                                        <div className="stugradetxt1">{studentGradeInfo.section}</div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-6">
                                                    <div className="stugradetxt2">
                                                        {studentGradeInfo.firstName}{" "} {studentGradeInfo.lastName}
                                                    </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-6">
                                                        <div className="stugradetxt3">Overall Grade : {studentGradeInfo.overallGrade}</div>
                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-responsive">
                                                        <table  id="" className="display table nowrap table-striped table-hover" style={{width:"100%"}}>
                                                            <thead>
                                                                <tr>
                                                                {
                                                                    headerList.map((numList,i) =>(
                                                                        (i===0) ? <th>{numList}</th> : <th className="textcenter">{numList}</th>
                                                                    ))
                                                                }
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                gradesList.map((gradeItem,j) => (
                                                                    <tr>
                                                                        <td key={gradeItem.name} style={{"vertical-align": "middle"}}>{gradeItem.name}</td>
                                                                        <td key={gradeItem.dueDate} className="textcenter" style={{"vertical-align": "middle"}}>{gradeItem.dueDate}</td>
                                                                        <td key={gradeItem.status} className="textcenter" style={{"vertical-align": "middle"}}>{gradeItem.status}</td>
                                                                        <td key={gradeItem.score} className="textcenter" style={{"vertical-align": "middle"}} >{gradeItem.score}</td>
                                                                        <td key={gradeItem.grade} className="textcenter" style={{"vertical-align": "middle"}}>{gradeItem.grade}</td>
                                                                        <td className="textcenter commenticon" style={{"vertical-align": "middle"}} key={gradeItem.feedback[0].comment } dangerouslySetInnerHTML={{ __html: gradeItem.feedback[0].comment}}></td>
                                                                        
                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*!-- [ Main Content ] end --*/}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
export default stugrade
