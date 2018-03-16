import Component from "../../core/component";
import Video from "./video";
import Source from "./source";
import { emitter } from "../../core/emitter";
import Circle from "./circle";
import Div from "./div";
import Img from "./img";
import H1 from "./h1";
import Span from "./span";
import Link from "./link";

export default class PositionItem extends Component {
    constructor(title: string, team: string, location: string, link: string, highlight: any, isHeader:boolean) {
        super()

        const ti = new Span(title).style({ width: '40%', display: 'inline-block', paddingLeft:'5px' })
        const tw = new Span(team).style({ width: '30%', display: 'inline-block' })
        const lo = new Span(location).style({ width: '30%', display: 'inline-block' })
        if(isHeader){

            this.append(ti, tw, lo)
            this.el.style.fontWeight= 'bold'
        }else{
            const a = new Link(link, '').style({ display: 'block', color:'#333', fontSize:'15px' })
            this.append(a.append(ti, tw, lo))

        }

        this.style({
            textAlign:'left',
           
            width:'1140px',
            margin:'auto',
            display: 'block',
            boxSizing:'border-box',
            padding: '5px 0',
            backgroundColor: highlight ? '#f6f6f6' : 'white'
        })

        emitter.on('mini', () => {this.el.style.fontSize = '14px'; this.el.style.width='calc(100% - 20px)'})
        emitter.on('small', () => {this.el.style.fontSize = '16px'; this.el.style.width='760px'})
        emitter.on('large', () => {this.el.style.fontSize = '16px'; this.el.style.width='1140px'})
    }

}