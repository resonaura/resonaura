import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-image-loading';

import { NavLink } from 'react-router-dom';

import './ReleaseMini.css';

export default function ReleaseMini({ link, id, name, typeName, releaseDate }) {
    const [releasePreviewImage] = useState("https://resonaura.com/api/storage/poster/release/" + id + "-min.jpg?v=2");
    const [releaseImage] = useState("https://resonaura.com/api/storage/poster/release/" + id + ".jpg?v=2");
    const [releaseYear] = useState((new Date(releaseDate)).getFullYear());
    
    return (
        <NavLink to={"/" + link}>
            <div className="release-mini">
                <ProgressiveImage
                    preview={releasePreviewImage}
                    src={releaseImage}
                    render={(src) => <div style={{backgroundImage: 'url(' + src + ')'}} className="poster"></div>}
                />

                <div className="title">{name}</div>
                <div className="sub-title">{typeName + " • " + releaseYear}</div>
            </div>
        </NavLink>
    );
}
