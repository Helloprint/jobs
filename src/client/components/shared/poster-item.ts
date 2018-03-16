import Component from "../../core/component";
import Img from "./img";
import H3 from "./h3";
import P from "./p";
import Button from "./button";
import Div from "./div";
import Link from "./link";
import Span from "./span";
import { emitter } from "../../core/emitter";


export default class PosterItem extends Component<HTMLLIElement> {
    constructor(image: string, title: string) {
        super({ el: 'li' })
        
        const img = new Img('100%', 'auto', image).style({ margin:'auto', marginBottom: '10px', display:'block', pointerEvents:'none' })
        const ttl = new Span(title).style({ display: 'block', textAlign:'center', pointerEvents:'none', fontSize:'16px' })
        this.append(img, ttl)

        this.style({
            color:'#333',
            width: '30%',
            margin: '20px auto',
            minHeight:'274px',
            listStyle: 'none'
        })

        emitter.on('mini',  () => { this.el.style.width = 'calc(100% - 20px)';  })
        emitter.on('small', () => { this.el.style.width = '45%';  })
        emitter.on('large', () => { this.el.style.width = '30%'; })
    }

}