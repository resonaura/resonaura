import { useEffect, useState } from 'react';

import KodoLink from './components/KodoLink';
import ProgressiveImage from 'react-progressive-image-loading';
import { NavLink } from 'react-router-dom';

export default function ArtistPage() {
    const [apiErrorAlertShowed, setApiErrorAlertShowed] = useState(false);

    const [artist, setArtist] = useState(null);
    const [links, setLinks] = useState(null);

    useEffect(() => {
        fetch('https://api.kodo.fun/music/getArtistInfo/?id=1')
        .then(response => response.json())
        .then(json => {
            if(json.ok)
            {
                setArtist(json.artist);
                setLinks(json.links);
            }
            else
            {
                setArtist(null);
                setLinks(null);
            }
        })
        .catch((error) => {
            if(!apiErrorAlertShowed)
                alert('API Error: ' + error);

            console.error('API Error: ' + error);
            setApiErrorAlertShowed(true);
        });
    }, [apiErrorAlertShowed]);

    const [artistPreviewImage] = useState("https://api.kodo.fun/storage/poster/artist/1-min.jpg");
    const [artistImage] = useState("https://api.kodo.fun/storage/poster/artist/1.jpg");

    return (
        <div className="links-page artist">
            <ProgressiveImage
                preview={artistPreviewImage}
                src={artistImage}
                render={(src) => <div style={{backgroundImage: 'url(' + src + ')'}} className="bg-cover"></div>}
            />
            <KodoLink loaded={artist != null} previewImage={artistPreviewImage} image={artistImage} name={artist != null ? artist.Name : ""} links={links} />
            <div className="action-buttons">
                <NavLink to="/releases">
                    <button>Перейти к релизам</button>
                </NavLink>
            </div>
        </div>
    );
}
