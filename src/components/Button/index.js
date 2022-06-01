import classNames from "classnames/bind";
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({to,href,
    small = false,
    text = false, 
    large = false ,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    children,
    className,
    leftIcon,
    onClick}) 
    {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className
    });
    return (  
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;