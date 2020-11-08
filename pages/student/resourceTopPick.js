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
                            {/* <iframe width="100%" height="200" src="https://www.youtube.com/embed/BcIDRet787k" allowfullscreen></iframe> */}
                            {/* <iframe width="100%" height="200" src={topPickResource.resource} allowfullscreen></iframe> */}
                            {/* Todo : Have to figure it out to display the url along with embed and the last value after equal to symbol. */}
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/vN9aR2wKv0U" allowfullscreen></iframe>
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