import Component from "../../core/component";
import H2 from "./h2";
import Span from "./span";
import Div from "./div";
import H3 from "./h3";
import { emitter } from "../../core/emitter";

export default class MainTitle extends Component {
    constructor(title: string, subtitle: string, color: string) {
        super()


        const titleContents = new H2(title || '')

            .style({
                fontSize: window.innerWidth < 980 ? '32px' : '39px',
                fontFamily: 'museo700',
                lineHeight: '46px',
                margin: '0',
                textTransform: 'uppercase',
                letterSpacing: '-2.2px',
                marginBottom: '5px'
            })

        titleContents.el.innerHTML = marked(titleContents.el.innerHTML)
            .replace('<strong>', '<strong style="font-family:museo900">')
            .replace('<p>', '')
            .replace('<p>', '<br>')//Fix   
            .replace('</p>', '')



        const subholderContents = new H3(subtitle || '')
            .style({
                fontFamily: 'museo500',
                fontSize: '18px',
                margin: '0',
                lineHeight: '23px',
                fontWeight: '400',
            })
        subholderContents.el.innerHTML = subholderContents.el.innerHTML
            .replace('<p>', '')
            .replace('<p>', '<br>')//Fix    
            .replace('</p>', '')
        this.append(titleContents, subholderContents)

        this.style({
            color: color,
            display: 'block',
            textAlign: 'center',
            width: '100%',
            marginBottom: '30px',
            marginTop: '40px'
        })
        emitter.on('mini', () => this.el.style.fontSize = '32px')
        emitter.on('small', () => this.el.style.fontSize = '39px')
        emitter.on('large', () => this.el.style.fontSize = '39px')
    }

}