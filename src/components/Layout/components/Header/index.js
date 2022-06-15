import styles from './Header.module.scss'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import routes from '~/config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEllipsisVertical, faLanguage,  faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import 'react-tippy/dist/tippy.css'
import Image from '~/components/Image'
import 'tippy.js/dist/tippy.css';
import Search from '../Search'  
import images from '~/assets/images'
import Menu from '~/components/Proper/Menu';
import { faKeyboard} from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tippy';
import { InboxIcon, UploadIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

const  MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children:{
            title:'Language',
            data: [
                {   
                    type:'language',
                    code:'en',
                    title:'English'
                },
                {   
                    type:'language',
                    code:'vi',
                    title:'Tiếng Việt'
                }
            ]
        }
    }
    , 
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} /> ,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} /> ,
        title: 'Keyboard shortcuts'
    }
]
    const currentUser = false;
function Header() {

    

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
            
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} /> ,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} /> ,
            title: 'Get coins',
            to: '/coin'
        },
        
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} /> ,
            title: 'Log out',
            to: '/logout',
            separate:true
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routes.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok" /></Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                {currentUser ? ( 
                    <>
                        
                            <Tooltip title="Upload" placement="bottom" delay={[0,200]}>
                                <button className={cx('actions-btn')}>
                                    <UploadIcon /> 
                                </button>
                            </Tooltip>
                            <Tooltip title="Message" placement="bottom" delay={[0,200]}>
                                <button  className={cx('actions-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tooltip>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>    
                        <Button  primary>Log in</Button>                   
                    </>
                   )}
                        <Menu
                             items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <Image
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1654059600&x-signature=phK%2FCTVNvQkY%2BKwRJHjzDGBXjlo%3D" 
                                    className={cx('user-avatar')} 
                                    alt="Nguyen Van A" 
                                />
                            ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                            )}
                         </Menu>
                   </div>
            </div>
        </header>
    );
}

export default Header;