import React from 'react';
import StudentLayout from '../../layout/StudentLayout';

function my_resources(props)
{
    return(
        <StudentLayout{...props}>
       <div>
           <h1>MY RESOURCES COMPONENT</h1>
       </div>
       </StudentLayout>
    )
}

export default my_resources