import Component from "../../core/component";
import Img from "./img";
import Div from "./div";
import { emitter } from "../../core/emitter";

export default class Footer extends Component<HTMLDivElement> {
    loaded = false
    constructor(_logo: string, _image: string, _text: string) {
        super()

        const logo = new Img(224, 60, _logo)
        const text = new Div(_text).style({ fontSize: '18px', marginTop: '15px' })
        this.append(logo, text)
        var bgImg = new Image();
        bgImg.onload = () => {
            this.el.style.opacity = '1'
        };
        emitter.on('scroll', () => {
            if (this.el.getBoundingClientRect().top < window.innerHeight && !this.loaded) {
                bgImg.src = _image + '?fm=webp&q=60';
                bgImg.onerror = () => {bgImg.onerror = null; bgImg.src = _image + '?fm=' + _image.split('.').reverse()[0] + '&q=60'}
                this.el.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' + bgImg.src + ')';
                this.loaded = true
            }
        })
        this.style({
            width: '100%',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            justifyContent: 'center',
            transition: 'all .5s',
            backgroundPosition: '50% 0px',
            backgroundSize: 'cover',
            overflow: 'hidden',
            marginTop: '20px'
        })
    }

}