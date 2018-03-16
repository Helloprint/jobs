import Component from "../../core/component";
import Div from "./div";
import { emitter } from "../../core/emitter";
import { Utils } from "../../services/parse-components";

export default class FixedBanner extends Component {
    loaded = false
    constructor(img: string, items: any[]) {
        super()

        
        var bgImg = new Image();
        bgImg.onload = () => {
            this.el.style.opacity = '1'
        };
        emitter.on('scroll', () => {
            if (this.el.getBoundingClientRect().top < window.innerHeight && !this.loaded) {
                bgImg.src = img + '?fm=webp&q=60';
                bgImg.onerror = ()=>bgImg.onerror = null; bgImg.src = img + '?fm='+img.split('.').reverse()[0]+'&q=60'
                this.el.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' + bgImg.src + ')';
                this.loaded = true
            }
        })
        items.map((content: any) => {
            const c = Utils.parseComponents(content)
            this.append(c)
        })


        this.style({
            backgroundAttachment: 'fixed',
            backgroundColor: '#696969',
            opacity: '0',
            backgroundPosition: '50% 50%',
            transition: 'all .4s',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '30px 0 50px 0',
            color: '#ffffff',
            fontSize:'18px',
            width: '100%',
            lineHeight: '1.6em',
            margin: 'auto',
            marginBottom: '40px'
        })

    }

}