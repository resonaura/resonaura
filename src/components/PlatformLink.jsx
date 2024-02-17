import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PlatformLink({platformIcon, platformName, url, buttonTitle = ''}) {
    const {t} = useTranslation('common');

    if(buttonTitle == '')
        buttonTitle = t('releases.actions.listen');

    return (
        <div className="platform-link">
            <img className="platform-icon" alt="icon" src={platformIcon} />
            <div className="platform-name">{platformName}</div>
            <a href={url}>
                <button className="action">{buttonTitle}</button>
            </a>
        </div>
    );
}
