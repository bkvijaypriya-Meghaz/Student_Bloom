import React, {Component} from 'react';
import {FiLock} from 'react-icons/fi'

class Studentquicklaunch extends Component {
    render() {
        return (
            <div>
            <div className="">
                <div className="card">
                    <div className="card-header">
                        <h5>My Teacher</h5>
                    </div>
                    <div className="card-block stuprofile_card">
                        <div className="teacherimg"> <span data-toggle="tooltip" data-html="true" data-placement="bottom" title="Ms. Jane Doe">JD</span></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <div className="card-header">
                        <h5>Student Resorce Top Pick!</h5>
                    </div>
                    <div className="card-block stuprofile_card">
                        <div className="stuprovideo">
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/BcIDRet787k" allowfullscreen></iframe>
                        </div>
                        <div className="videotxt">AC vs. DC Currents</div>
                        <div className="videosmalltxt">Video</div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="stuproheadtxt">Quick Launcher</div>
                <div className="card">
                    <div className="card-block stuprofile_card" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="quicklauncheritem">
                                    <div className=""><i className="ti-folder"></i> My Resources Folder</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock">
                                    <i className="feather"><FiLock/></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-block stuprofile_card">
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                    <div className=""><i className="ti-bookmark"></i> My Bookmarks</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock">
                                    <i className="feather"><FiLock/></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="card">
                    <div className="card-block stuprofile_card">
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                    <div className=""><i className="icon-game-controller"></i> Games</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock">
                                    <i className="feather"><FiLock/></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="card">
                    <div className="card-block stuprofile_card">
                        <div className="row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                    <div className=""><i className="icon-book-open"></i> Infopedia</div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="studashlock">
                                    <i className="feather"><FiLock/></i>
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

export default Studentquicklaunch