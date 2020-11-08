import React from 'react';
//import StudentLayout from '../../layout/StudentLayout';
import Header from './header';
import Footer from '../footer';
function games_link(props)
{
    return(
        <div>
            <Header></Header>
            <div style={{height:'750px', textAlign:'center'}} >
                <div style={{paddingTop:'200px'}}>
                    <h1>GAMES COMPONENT</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default games_link