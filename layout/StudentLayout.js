import Header from '../pages/student/header'
import Footer from '../pages/student/footer'

const StudentLayout = ({children}) => {
    
    return(
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>

       </div>
    )
}

export default StudentLayout