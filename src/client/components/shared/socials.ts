import Component from "../../core/component";
import Img from "./img";

import SocialItem from "./social-item";

export default class Socials extends Component<HTMLUListElement> {
    constructor() {
        super({ el: 'ul' })
        this.append(new SocialItem('/images/facebook.svg', 'https://www.facebook.com/LifeatHelloprint'))
        this.append(new SocialItem('/images/linkedin.svg', 'https://www.linkedin.com/company/3286872'))
        this.append(new SocialItem('/images/twitter.svg', 'https://twitter.com/_Helloprint'))
        this.append(new SocialItem('/images/youtube.svg', 'https://www.youtube.com/channel/UC6YYBCdSDMFa9jYFJ3IpMsA'))
 
        this.style ({
            display: 'flex',
            padding: '0',
            margin: '0'
        })
    }

}