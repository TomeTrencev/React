import React,{useContext} from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = (props) => {
     
    const {selectedImage, setSelectedImage} = useContext(GalleryContext);

    return(
        <div id="popup">
            <button  className='close-popup' onClick={setSelectedImage({})}>
                &times;
            </button>
            <button  className='delete-photo'>
                Del
            </button>
            <div className='popup-container'>
                <img src={selectedImage.url} alt=""/>
            </div>
        </div>
    )
}