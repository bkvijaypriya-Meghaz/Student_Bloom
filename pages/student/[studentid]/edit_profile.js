import React from 'react';
import StudentLayout from '../../../layout/StudentLayout';
import Header from './header';
import Footer from '../footer';
function edit_profile(props)
{
    return(
        // Todo : Need to remove this header from here and pass it throught the layout and 
        //         have to pass image path as a param to header component as the logo wasn't coming 
        //         if it is present in out side of [studentid] folder
    //    <StudentLayout{...props}>
       <div>
            <Header></Header>
            <div style={{height:'750px', textAlign:'center'}} >
                <div style={{paddingTop:'200px'}}>
                    <h1>EDIT PROFILE COMPONENT</h1>
                </div>
            </div>
            <Footer></Footer>
       </div>
    //    </StudentLayout>
    )
}

export default edit_profile