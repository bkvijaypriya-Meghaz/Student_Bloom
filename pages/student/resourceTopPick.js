import React, { Component } from 'react';
import { FiLock } from 'react-icons/fi';

export default function resourceTopPick () {
    return(
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
    )
}