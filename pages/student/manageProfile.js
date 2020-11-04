import React, { Component } from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import { FiBell } from 'react-icons/fi'
import { FiLock } from 'react-icons/fi'

class manageProfile extends Component {
    render() {
        return (

            <div>

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
                                        <i className="feather"><FiLock /></i>
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
                                        <i className="feather"><FiLock /></i>
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

export default manageProfile;