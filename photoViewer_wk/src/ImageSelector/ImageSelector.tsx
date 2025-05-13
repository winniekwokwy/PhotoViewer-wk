import React from "react";  // import React (to provide access to TSX)
import './ImageSelector.css';

export function ImageSelector(props: any) {    // declare and export new function called 'PhotoViewer'
    
    const selectedImgURL = props.selectedImgURL;
    const setSelectedImg = props.setSelectedImg;

    return (                
        <div className="ImgSelector">               
            {imageUrls.map((url: string, index: number) => <img key={index} src={url} className={url === selectedImgURL? "Selected": "NotSelected"} onClick={()=>setSelectedImg(url)}/>)}
        </div>
    );
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/200/200.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();