import React from 'react';
import { FiBell } from 'react-icons/fi'
import { FiLock } from 'react-icons/fi'

function upcomingAssignments() {
    return (
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
                        <a href="Stu_energy_assignment"><div className="" style={{ color: "#20cbcf" }}>Use Of Energy Assessment <span className="float-right">10th Sep 2020</span></div></a>
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
    )
}


export default upcomingAssignments;