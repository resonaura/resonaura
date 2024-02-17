import PlatformLink from "./PlatformLink";

import ProgressiveImage from "react-progressive-image-loading";

import Icon_1 from './assets/icon/youtube.svg';
import Icon_2 from './assets/icon/spotify.svg';
import Icon_3 from './assets/icon/tidal.svg';
import Icon_4 from './assets/icon/apple.svg';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import './KodoLink.css';

export default function KodoLink({loaded, name, previewImage, image, links}) {
    let location = useLocation();

    const platformIcons = {
        1: Icon_1,
        2: Icon_2,
        3: Icon_3,
        4: Icon_4,
    };

    return (
        <div className={"kodo-link" + (loaded ? " loaded": "") }>
            <div className="poster-wrapper">
                {
                    image &&
                    <ProgressiveImage
                        preview={previewImage}
                        src={image}
                        render={(src) => <img className="poster" alt="cover" src={src} />}
                    />
                }
            </div>
            <h1>{name}</h1>
            <div className="links">
                {
                    links &&
                    links.map(link => {
                        return (
                            <TransitionGroup>
                                <CSSTransition classNames="fade" timeout={2000} key={location.pathname + "_" + link.Link}>
                                    <PlatformLink platformIcon={platformIcons[link.PlatformID] ?? null} platformName={link.PlatformName} url={link.Link} />
                                </CSSTransition>
                            </TransitionGroup>
                        )
                    })
                }
            </div>
        </div>
    );
}
