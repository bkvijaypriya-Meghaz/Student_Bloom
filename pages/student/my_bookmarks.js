import React from 'react';
import StudentLayout from '../../layout/StudentLayout';

function my_bookmarks(props)
{
    return(
        <StudentLayout{...props}>
       <div>
           <h1>MY BOOKMARKS COMPONENT</h1>
       </div>
       </StudentLayout>
    )
}

export default my_bookmarks