import Component from "../../core/component";
import Video from "./video";
import Source from "./source";
import { emitter } from "../../core/emitter";
import Circle from "./circle";
import Div from "./div";
import Img from "./img";
import H1 from "./h1";
import Dummy from "../dummy";

export default class PageHeader extends Component {
    constructor(title: string, subTitle: string, background: string, icon?: string) {
        super()

        const circleEl = icon ? new Circle() : new Dummy()
        const iconEl = icon ? new Img(86, 86, icon) : new Dummy()
        const titleEl = new H1(marked(title)).style({ fontSize: '44px', fontWeight: 'bold', fontFamily: 'museo900', margin: '16px' })
        const subTitleEl = subTitle ? new Div(subTitle).style({ fontSize: '16px' }) : new Dummy()

        this.append(circleEl.append(iconEl), titleEl, subTitleEl)
        var bgImg = new Image();
        bgImg.onload = () => {
            this.el.style.opacity = '1'
        };
        bgImg.src = background + '?fm=webp&q=60';
        bgImg.onerror = () => {bgImg.onerror = null; bgImg.src = background + '?fm=' + background.split('.').reverse()[0] + '&q=60'}
        this.el.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' + bgImg.src + ')';
        this.style({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: '0',
            padding: '80px',
            flexDirection: 'column',
            transition: 'all .5s',
            textAlign: 'center',
            marginBottom: '50px',
            color: 'white',
            // width: '100%',
            minHeight: '300px',
            textShadow: '0 1px 5px rgba(0,0,0,.5)',
            // backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${background}?fm=webp&q=60)`,
            backgroundPosition: '50% 0px',
            backgroundSize: 'cover',
            overflow: 'hidden'
        })
        // setTimeout(() => this.el.style.opacity = '1', 500)
    }

}