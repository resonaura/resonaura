import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import './ReleasesPage.css';
import ReleaseMini from './components/ReleaseMini';
import { useTranslation } from 'react-i18next';

export default function ReleasesPage() {
    const [apiErrorAlertShowed, setApiErrorAlertShowed] = useState(false);

    const [releases, setReleases] = useState(null);

    const {t} = useTranslation('common');

    useEffect(() => {
        fetch('https://resonaura.com/api/music/getArtistReleases/?artist_id=1')
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
                <h1>{t('releases.actions.chooserelease')}</h1>
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
                    <button>{t('releases.actions.gotoartist')}</button>
                </NavLink>
            </div>
        </div>
    );
}
