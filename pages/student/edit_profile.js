import React from 'react';
import StudentLayout from '../../layout/StudentLayout';

function edit_profile(props)
{
    return(
        <StudentLayout{...props}>
       <div>
           <h1>EDIT PROFILE COMPONENT</h1>
       </div>
       </StudentLayout>
    )
}

export default edit_profile