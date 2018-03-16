import Component from "../../core/component";
import Div from "./div";
import Img from "./img";
import { emitter } from "../../core/emitter";

export default class Paragraph extends Component {
    constructor(body: string, columns: number, isFull: boolean, align: string = 'justify', fontSize = 'medium', color: string) {
        super()

        this.el.innerHTML = marked(body)
        this.el.innerHTML = this.el.innerHTML.replace(/\<a/g, '<a style="color:#333" ')    .replace('<p>', '')

        this.style({
            lineHeight: '1.6em',
            fontSize: fontSize,
            color: color ? color : '',
            columnCount: columns,
            columnGap: '36px',
            width: isFull ? '1140px' : '760px',
            margin: 'auto',
            textAlign: align,
            marginTop: '5px',
            marginBottom: '40px',
            padding: '0 10px'
        })
        emitter.on('mini', () => { this.el.style.width = 'calc(100% - 20px)'; this.el.style.columnCount = 1 })
        emitter.on('small', () => { this.el.style.width = '760px'; this.el.style.columnCount = 1 })
        emitter.on('large', () => { this.el.style.width = isFull ? '1140px' : '760px'; this.el.style.columnCount = columns })
    }

}