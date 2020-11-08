import React from 'react';
//import StudentLayout from '../../../layout/StudentLayout';
import Header from './header';
import Footer from '../footer';
function my_bookmarks(props)
{
    return(
        <div>
            <Header></Header>
            <div style={{height:'750px', textAlign:'center'}} >
                <div style={{paddingTop:'200px'}}>
                    <h1>MY BOOKMARKS COMPONENT</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default my_bookmarks