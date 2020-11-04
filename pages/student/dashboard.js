import StudentLayout from '../../layout/StudentLayout';
import StudentAssignments from './StudentAssignments';
import StudentProfile from './manageProfile';
import Studentquicklaunch from './Studentquicklaunch';

import Profile from './profile';
import UpcomingAssignments from'./upcomingAssignments';
import StudentsTeacher from './studentsTeacher';
import ResourceTopPick from './resourceTopPick';



export default function dashboard(props) {
    return(

        <StudentLayout{...props}>
        <div className="studashbg">
        <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body">
                        <div class="page-wrapper">                 
                            <div class="row">

                                <div class="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                                    <Profile />
                                    <UpcomingAssignments />
                                    <StudentProfile/>
                                </div>

                                <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                                    <StudentAssignments/>
                                </div>

                                <div class="col-xl-3 col-md-3 col-sm-12 col-xs-12">
                                    <StudentsTeacher />
                                    <ResourceTopPick />
                                    <Studentquicklaunch/>
                                </div>
                            </div>
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