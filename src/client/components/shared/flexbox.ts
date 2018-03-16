import Component from "../../core/component";
import MenuItem from "./menu-item";
import { emitter } from "../../core/emitter";
import NewsItem from "./news-item";
import { Utils } from "../../services/parse-components";

export default class Flexbox extends Component {
    constructor(items: any[]) {
        super()
        
        items.map((content: any) => {
            const c = Utils.parseComponents(content)
            this.append(c)
        })

        this.style({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            padding: '0',
            margin: 'auto'
        })

        emitter.on('mini',  () => { this.el.style.width = 'calc(100% - 20px)'; this.el.style.flexDirection = 'column' })
        emitter.on('small', () => { this.el.style.width = '760px'; this.el.style.flexDirection = 'column' })
        emitter.on('large', () => { this.el.style.width = '1140px'; this.el.style.flexDirection = 'row' })
        emitter.on('huge',  () => { this.el.style.width = '1600px'; this.el.style.flexDirection = 'row' })
    }


}