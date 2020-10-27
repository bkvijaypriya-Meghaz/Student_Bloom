import StudentLayout from '../../layout/StudentLayout';
import StudentAssignments from './StudentAssignments';
import StudentProfile from './StudentProfile';
import Studentquicklaunch from './Studentquicklaunch';


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
                                    <StudentProfile/>

                                </div>
                                <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                                    <StudentAssignments/>
                                </div>

                                <div class="col-xl-3 col-md-3 col-sm-12 col-xs-12">
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