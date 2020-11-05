import React, { Component } from 'react';
//import { FiLock } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenericServices';
import {TOP_PICK_URL} from '../../components/ConstFile';

export default function resourceTopPick () {

    const [top_pick, setTopPick] = useState([]);

    useEffect(() => {
        getInfo(TOP_PICK_URL).then((data) => {
            console.log('bloom data is : ',data);
            console.log('resource is : ',data.resource);
            console.log('name is : ',data.name);
           
            setTopPick(data);
        })
    }, [])

    return(
        <div className="">
        <div className="card">
            <div className="card-header">
                <h5>Student Resorce Top Pick!</h5>
            </div>
            {
                top_pick.map((topPickResource) => (
                    <div className="card-block stuprofile_card">
                        <div className="stuprovideo">
                            <iframe width="100%" height="200" src={topPickResource.resource} allowfullscreen></iframe>
                        </div>
                        <div className="videotxt">{topPickResource.name}</div>
                        <div className="videosmalltxt">Video</div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}