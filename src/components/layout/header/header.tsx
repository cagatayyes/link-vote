import logo from '../../../assets/hepsiburada-logo.png';
import './header.scss';

export function Header() {
    return (
        <div className="header">
            <div className='header-logoContainer'>
                <img className='header-logoContainer-logo' alt='hepsiburada' src={logo} />
            </div>


            <h3 className='header-titleContainer'>
                Link VOTE Challenge
            </h3>

        </div>
    )
} 