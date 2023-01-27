import {FC} from 'react';

const Header: FC = () => {
    return (
        <div className='header'>
            <i className="fa fa-calculator"></i>
            <h3 className='header-title'>BMI Calculator</h3>
        </div>
    );
};

export default Header;