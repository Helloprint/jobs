import Component from "../../core/component";
import Img from "./img";
import H3 from "./h3";
import P from "./p";
import Button from "./button";
import Div from "./div";
import Link from "./link";
import Span from "./span";
import { emitter } from "../../core/emitter";


export default class IconItem extends Component<HTMLLIElement> {
    constructor(image: string, title: string,  href: string, color: string) {
        super({ el: 'li' })
        
        const img = new Img(120, 120, image).style({ margin:'auto', marginBottom: '30px', display:'block', pointerEvents:'none' })
        const ttl = new Span(marked(title)).style({ display: 'block', textAlign:'center', pointerEvents:'none' })
        const a = new Link(href, '').style({ })
        href?this.append(a.append(img, ttl)):this.append(img, ttl)

        this.style({
            display: 'block', textDecoration:'none', color:color, fontSize:'18px' , fontFamily:'museo700',
            width: window.innerWidth<=980?'100%':'360px',
            textAlign:'center',
            margin: '20px auto',
            listStyle: 'none'
        })
        emitter.on('mini', () => this.el.style.width = '100%')
        emitter.on('small', () => this.el.style.width = '360px')
        emitter.on('large', () => this.el.style.width = '360px')
    }

}