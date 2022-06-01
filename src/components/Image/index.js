import {useState,forwardRef} from 'react';
import images from '~/assets/images'
const Image = forwardRef(({ src,alt ,...props}, ref) => {
    const[fallback,setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage)
    }
    return (  
        // eslint-disable-next-line jsx-a11y/alt-text
        <img ref={ref}
         src={fallback || src} 
         alt={alt} 
         {...props} 
         onError={handleError}
         />
    );
})

export default Image;