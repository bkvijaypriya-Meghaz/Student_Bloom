import React from 'react';
import StudentLayout from '../../layout/StudentLayout';

function settings(props)
{
    return(
        <StudentLayout{...props}>
       <div>
           <h1>SETTINGS COMPONENT</h1>
       </div>
       </StudentLayout>
    )
}

export default settings
