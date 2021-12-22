import BWLogo from './assets/BWLogo.svg';

import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import './ReleasesPage.css';
import ReleaseMini from './components/ReleaseMini';

export default function ReleasesPage() {
    const [apiErrorAlertShowed, setApiErrorAlertShowed] = useState(false);

    const [releases, setReleases] = useState(null);

    useEffect(() => {
        fetch('https://api.kodo.fun/music/getArtistReleases/?artist_id=1')
        .then(response => response.json())
        .then(json => {
            if(json.ok)
            {
                setReleases(json.data);
            }
            else
            {
                setReleases(null);
            }
        })
        .catch((error) => {
            if(!apiErrorAlertShowed)
                alert('API Error: ' + error);

            console.error('API Error: ' + error);
            setApiErrorAlertShowed(true);
        });
    }, [apiErrorAlertShowed]);

    return (
        <div className="releases-page">
            <section className="title-block">
                <img src={BWLogo} alt="иероглиф" className="logo" />
                <h1>Выбери релиз</h1>
            </section>
            <div className="releases">
                {
                    releases &&
                    releases.map(release => {
                        return <ReleaseMini link={release.PrettyLink} id={release.ID} name={release.Name} typeName={release.TypeName} releaseDate={release.ReleaseDate} />
                    })
                }
            </div>
            <div className="action-buttons">
                <NavLink to="/">
                    <button>Перейти к исполнителю</button>
                </NavLink>
            </div>
        </div>
    );
}
