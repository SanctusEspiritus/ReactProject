import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (<header className={s.header}>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c32fe00-a989-4f20-be40-95646271b2e8/d9e6uww-072f1215-50d9-411f-b5a4-55a3ea19eceb.png/v1/fill/w_600,h_497,strp/vengeful_spirit_png_by_luizabegotten_d9e6uww-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk3IiwicGF0aCI6IlwvZlwvOGMzMmZlMDAtYTk4OS00ZjIwLWJlNDAtOTU2NDYyNzFiMmU4XC9kOWU2dXd3LTA3MmYxMjE1LTUwZDktNDExZi1iNWE0LTU1YTNlYTE5ZWNlYi5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zQ1gBCMn0O_R22YHT082Go-oSNgpz6GMa1uwQXL7nA8" />
            <div>
                {props.isAuth 
                ? <div>Welcome, {props.login}! <button onClick={props.loginOut}>Logout</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            </header>);
}

export default Header;