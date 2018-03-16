import Component from "../../core/component";
import { emitter } from "../../core/emitter";

export default class Img extends Component<HTMLImageElement> {
    loaded: boolean
    constructor(width: number | string, height: number | string, src: string, alt: string = '') {
        super({
            el: 'img'
        })
        this.el.onload = e => this.el.style.opacity = '1'
        this.el.alt = alt
        emitter.on('scroll', () => {
            if (this.el.getBoundingClientRect().top < window.innerHeight && !this.loaded) {
                this.loaded = true;
                
                this.el.src = src + (src.split('.').reverse()[0] == 'jpg' || src.split('.').reverse()[0] == 'png' ? '?fm=webp&q=60' : '')
                this.el.onerror = () => {this.el.onerror = null; this.el.src = src;}// +((src.split('.').reverse()[0]=='jpg')?( '?fm='+src.split('.').reverse()[0]+'&q=60'):'')}
                
            }
        })
        this.style({
            transition: 'all .5s',
            opacity: this.el.getBoundingClientRect().top < window.innerHeight?1:0,
            width: typeof width == 'string' ? width : width + 'px',
            height: typeof height == 'string' ? height : height + 'px'
        })
    }

}