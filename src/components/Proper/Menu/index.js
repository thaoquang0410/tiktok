import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Menu.module.scss'
import {Wrapper as ProperWrapper} from '~/components/Proper'
import classNames from 'classnames/bind';
import MenuItem from './MenuItem'
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles)

const defaultFn = () =>{
        
}
function Menu({children, items = [],onChange=defaultFn,hideOnClick=false}) {
    
    const [history,setHistory] = useState([{ data:items }])
    const current = history[history.length - 1];
    
    const renderItems = () => {
        return current.data.map((item,index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev,item.children]);
                }else {
                    onChange(item);
                }
            }}/>
        })
    }
    return ( 
        <Tippy
        interactive
        delay = {[0,700]}
        offset={[12,8]}
        placement="bottom-end"
        hideOnClick={hideOnClick}
        render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                <ProperWrapper className={cx('menu-poper')}>
                    {history.length > 1 && <Header title="Language" 
                    onBack={() =>{
                        setHistory(prev => prev.slice(0,prev.length-1))
                    }} />}  
                    <div className={cx('menu-body')}>
                        {renderItems()}
                    </div>
                </ProperWrapper>
            </div>
        )}
        onHide={() => setHistory(prev => prev.slice(0,1))}
        
    >
       {children}
    </Tippy>
     );
}

export default Menu;