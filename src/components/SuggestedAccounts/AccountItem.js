import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {Wrapper as ProperWrapper} from '~/components/Proper'
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {
    
    const renderPreview = (props) =>{
        return (
            <div className={cx('preview')} tabIndex='-1' {...props}>
                <ProperWrapper>
                  <AccountPreview />
                </ProperWrapper>
            </div>
        )
    }
    return (
      <div>
         <Tippy
        offset={[-20,0]}
        interactive
        delay={[800,0]}
        render={renderPreview}
        placement="bottom"
       >
         <div className={cx('account-item')}>
            <img 
            className={cx('avatar')}
            src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662044400&x-signature=jSx0q4iT6B2b9Q4yrRsMaiOufAk%3D' 
            alt='Signature' />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
            </div>
        </div>
       </Tippy>
      </div>
    );
}

AccountItem.propTypes = {

}
export default AccountItem;