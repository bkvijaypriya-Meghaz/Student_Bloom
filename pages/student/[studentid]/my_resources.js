import React from 'react';
import StudentLayout from '../../../layout/StudentLayout';
import Header from './header';
import Footer from '../footer';
function my_resources(props)
{
    return(
        <div>
            <Header></Header>
            <div style={{height:'750px', textAlign:'center'}} >
                <div style={{paddingTop:'200px'}}>
                    <h1>MY RESOURCES COMPONENT</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default my_resources