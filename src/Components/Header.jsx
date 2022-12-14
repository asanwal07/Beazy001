import react from "react";
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Make Your Business</span> Eazy With BEAZY.</h1>
                <p className='details'>let’s retailers replace traditional way of keeping records using pen and paper by bringing the store in the smartphone.</p>
                <a href='https://play.google.com/store/apps/details?id=com.beazy' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header;