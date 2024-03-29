import classNames from "classnames/bind";
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles);

function AccountPreview(){
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662044400&x-signature=jSx0q4iT6B2b9Q4yrRsMaiOufAk%3D' 
                    alt='Signature' className={cx('avatar')} />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analystic')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview