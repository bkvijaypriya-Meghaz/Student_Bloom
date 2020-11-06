import React from 'react';
import StudentLayout from '../../layout/StudentLayout';

function logout(props)
{
    return(
        <StudentLayout{...props}>
       <div>
           <h1>LOGOUT COMPONENT</h1>
       </div>
       </StudentLayout>
    )
}

export default logout