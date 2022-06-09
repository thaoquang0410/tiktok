import {  faCircleXmark,   faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss'
import { useState, useEffect,useRef } from 'react'
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import * as searchService from '~/services/searchService'
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import {  SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hook';
const cx = classNames.bind(styles)

function Search() {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult,setShowResult] = useState(true);
    const [loading,setLoading] = useState(false);

    const debounce = useDebounce(searchValue,500);
    const inputRef=useRef();

    useEffect(() => {
        if(!debounce.trim()){
            setSearchResult([])
            return;
        }
        
        const fetchApi = async() => {
            setLoading(true)

            const result  = await searchService.search(debounce);
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi();
    }, [debounce])

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(searchValue.startsWith(' ')){
            return;
        }
        setSearchValue(searchValue);
    }

   
    return ( 
        <Tippy
        visible={showResult && searchResult.length > 0}
        appendTo={() => document.body}
        interactive
        render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <ProperWrapper>
                    <h4 className={cx('search-title')}>
                        Accounts
                    </h4>
                    {searchResult.map((result)=>(
                        <AccountItem key={result.id} data={result} />
                    ))}
                </ProperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input 
                ref={inputRef}
                value={searchValue}
                placeholder="Search accounts and videos" 
                spellCheck={false}
                onChange={handleChange}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={() =>{
                    setSearchValue('');
                    setSearchResult([]);
                    inputRef.current.focus();
                }} >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}
            {loading &&  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                <SearchIcon />
            </button>
        </div>
    </Tippy>
     );
}

export default Search;