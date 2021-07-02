import { useHistory } from "react-router-dom";

import logo from '../../../../assets/icons/logo.svg';
import './Header.css';

export default function Header() {
    const history = useHistory();

    function _redirectToHomepage() {
        history.push({
            pathname: '/'
        });
    }

    return (
        <header data-testid="page-header">
            <div className="header-wrapper">
                <img src={logo} alt="logo" onClick={_redirectToHomepage} />

                <span className="header-label">Frontend Assignment</span>
            </div>
        </header>
    );
};
