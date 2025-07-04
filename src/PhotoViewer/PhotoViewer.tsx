import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css';

type propsType ={
    url: string;
};

export function PhotoViewer(props: propsType) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="ImgViewer">               
            <img src={props.url}/>
        </div>
    );
}