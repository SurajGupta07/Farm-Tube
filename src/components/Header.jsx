import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarData} from '../data/SidebarData';
import {IconContext} from 'react-icons';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        marginLeft: '1rem',
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            display: 'block'
        }
    },
    inputRoot: {
        color: 'inherit'
    },
    sectionDesktop: {
        display: 'none',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            display: 'flex',
            marginLeft: '91rem',
            paddingRight: '5rem'
        }
    },
    sectionMobile: {
        display: 'flex',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            display: 'none'
        }
    }
}));

export function Header() {
    const menuId = 'primary-search-account-menu';
    const classes = useStyles();
    const navigate = useNavigate();

    const removeLogin = () => {
        localStorage.removeItem('login')
        navigate('/login');
    }

    return (
        <div>
            <IconContext.Provider value={{
                color: '#fff'
            }}>
                <div className='navbar'>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/" className="nav_logo">Farm-Tube</Link>
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <div>
                            <button className="history__btn" onClick={() => removeLogin()}>Logout</button>
                        </div>
                        <IconButton aria-label="show 17 new notifications" color="secondary"></IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="secondary"
                            onClick=
                            {() => navigate('/login')}>
                        </IconButton>
                    </div>
                </div>
                <nav className={'nav-menu active'}>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}
