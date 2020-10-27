import React, {Component} from 'react'
import StudentLayout from '../../layout/StudentLayout';

class stugrade extends Component {
  
  headdata = ["Name", "Due Date", "Status", "Score", "Grade", "Feedback"];

    data = [
			  {
				 name: 'Cell Quiz',
				 duedate: "",
				 status: "Turned In",
				 score: "N/A",
				 grade:"",
				 feedback:""
			  },
			  {
				 name: 'Experiment with forces',
				 duedate: "",
				 status: "Turned In",
				 score: "N/A",
				 grade:"",
				 feedback:"<i title=Balaji></i>"
			  },
			  {
				 name: 'Weather Science Rock',
				 duedate: "",
				 status: "Graded",
				 score: "70/100",
				 grade:"C",
				 feedback:'<i className="ti-comment " data-toggle="tooltip" data-html="true" data-placement="bottom" title="Review the concepts from our Energy Lesson"></i>'
			  },

			  {
				 name: 'Patterns of Earth Quiz',
				 duedate: "",
				 status: "Graded",
				 score: "80/100",
				 grade:"B",
				 feedback:'<i className="ti-comment "  data-toggle="tooltip" data-html="true" data-placement="bottom" title="Good Job!"></i>'
			  },
			  {
				 name: 'Energy Writing Science',
				 duedate: "",
				 status: "In Progress",
				 score: "N/A",
				 grade:"",
				 feedback:""
			  },

			  {
				 name: 'Matter Assessment',
				 duedate: "",
				 status: "Graded",
				 score: "100/100",
				 grade:"A",
				 feedback:""
			  }			  
    ];

    render() {
        return(
            <StudentLayout{...this.props}>
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
                                                            <div className="stugradetxt1">4th Grade Science</div>
                                                        </div>
                                                        <div className="col-md-6 col-xl-6">
                                                            <div className="stugradetxt2">Ann Doe</div>
                                                        </div>
                                                        <div className="col-md-6 col-xl-6">
                                                            <div className="stugradetxt3">Overall Grade : B+</div>
                                                        </div>
                                                        <hr></hr>
                                                        <div className="table-responsive">
                                                        <table  id="" className="display table nowrap table-striped table-hover" style={{width:"100%"}}>
            <thead>
                <tr>
              {
                   this.headdata.map((numList,i) =>(
                         //<th className="textcenter">{numList}</th>
                         (i===0) ? <th>{numList}</th> : <th className="textcenter">{numList}</th>
                   ))
              }
              </tr>
              </thead>
              <tbody>
              {
                   this.data.map((numColist,j) => (
                     <tr>
                         <td key={numColist.name} style={{"vertical-align": "middle"}}>{numColist.name}</td>
                         <td key={numColist.duedate} className="textcenter" style={{"vertical-align": "middle"}}>{numColist.duedate}</td>
                         <td key={numColist.status} className="textcenter" style={{"vertical-align": "middle"}}>{numColist.status}</td>
                         <td key={numColist.score} className="textcenter" style={{"vertical-align": "middle"}} >{numColist.score}</td>
                         <td key={numColist.grade} className="textcenter" style={{"vertical-align": "middle"}}>{numColist.grade}</td>
                         <td className="textcenter commenticon" style={{"vertical-align": "middle"}} key={numColist.feedback } dangerouslySetInnerHTML={{ __html: numColist.feedback}}></td>
                         
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
                                         {/*!-- [    Header ] end --*/}
        
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
}
export default stugrade