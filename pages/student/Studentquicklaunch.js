import React, { Component } from 'react';
import { FiLock } from 'react-icons/fi'
import Link from 'next/link'

function Studentquicklaunch(){
    //Todo : This studentid can be come through session or from api call
    const studentid = "12345"
        return (
            <div>
                <div className="">
                    <div className="stuproheadtxt">Quick Launcher</div>
                    <div className="card">
                        <div className="card-block stuprofile_card" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                            <div className="row">
                                <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                    <div className="quicklauncheritem">
                                        <div className="">
                                            <Link href={`/student/${studentid}/my_resources`}>
                                                <a href="#">
                                                    <i className="ti-folder"></i> My Resources Folder
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                    <div className="studashlock">
                                        <i className="feather"><FiLock /></i>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-block stuprofile_card">
                            <div className="row">
                                <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                    <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                        <div className="">
                                            <Link href={`/student/${studentid}/my_bookmarks`}>
                                                <a href="#">
                                                    <i className="ti-bookmark"></i> My Bookmarks
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                    <div className="studashlock">
                                        <i className="feather"><FiLock /></i>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="card-block stuprofile_card">
                            <div className="row">
                                <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                    <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                        <div className="">
                                            <Link href={`/student/${studentid}/games_link`}>
                                                <a href="#">
                                                    <i className="icon-game-controller"></i> Games
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                    <div className="studashlock">
                                        <i className="feather"><FiLock /></i>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="card-block stuprofile_card">
                            <div className="row">
                                <div className="col-xl-10 col-md-10 col-sm-10 col-xs-10">
                                    <div className="quicklauncheritem" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview">
                                        <div className="">
                                            <Link href={`/student/${studentid}/infopedia`}>
                                                <a href="#">
                                                    <i className="icon-book-open"></i> Infopedia
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-2 col-md-2 col-sm-2 col-xs-2">
                                    <div className="studashlock">
                                        <i className="feather"><FiLock /></i>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
}

export default Studentquicklaunch