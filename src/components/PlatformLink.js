import React from 'react';

export default function PlatformLink({platformIcon, platformName, url, buttonTitle = "Слушать"}) {
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
