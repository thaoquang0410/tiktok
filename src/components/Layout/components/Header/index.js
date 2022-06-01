import styles from './Header.module.scss'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCoins, faEllipsisVertical, faGear, faLanguage, faMagnifyingGlass, faSign, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import 'react-tippy/dist/tippy.css'
import Image from '~/components/Image'
import 'tippy.js/dist/tippy.css';
   
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Proper/Menu';
import { faKeyboard, faMessage } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tippy';
import { InboxIcon, SearchIcon, UploadIcon } from '~/components/Icons';

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
    const currentUser = true;
function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0);
    }, [])

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
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visibile={searchResult.length > 0}
                    interactive
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </ProperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellcheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </Tippy>
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