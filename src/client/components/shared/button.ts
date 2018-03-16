import Link from "./link";
import { emitter } from "../../core/emitter";

export default class CButton extends Link {
    constructor(href: string, text = '', color = '#333', backgroundColor = '#fec841', hoverImage?: string, target?:string) {

        super(href, text, target || '_self', '')
        if (hoverImage) {
            this.hover = () => {
                this.el.style.backgroundImage = `url(${hoverImage})`
                this.el.style.color = 'transparent'
            }
            this.leave = () => {
                this.el.style.backgroundImage = `none`
                this.el.style.color = color
            }
        } else {
            this.hover = () => this.style({ textDecoration: 'underline', backgroundColor: '#febf23' })
            this.leave = () => this.style({ textDecoration: 'none', backgroundColor: backgroundColor })
        }

        this.style({
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'28px',
            textAlign: 'center',
            margin: '10px 0',
            borderRadius: '12px',
            transition: 'all .16s',
            width:window.innerWidth<980? '134px':'150px',
            padding: '0.8em 0',
            fontSize: '15px',
            lineHeight: '1.1em',
            fontFamily: 'museo900',
            fontWeight: '600',
            display: 'inline-block',
            backgroundColor: backgroundColor,
            border: backgroundColor == 'transparent' ? '1px solid white' : 'none',
            color: color,
            textDecoration: 'none',
            cursor: 'pointer'
        })

        emitter.on('mini',  () => this.el.style.width = '134px')
        emitter.on('small', () => this.el.style.width = '150px')
        emitter.on('large', () => this.el.style.width = '150px')
    }
}