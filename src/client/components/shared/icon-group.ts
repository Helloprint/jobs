import Component from "../../core/component";
import MenuItem from "./menu-item";
import { emitter } from "../../core/emitter";
import NewsItem from "./news-item";
import IconItem from "./icon-item";

export default class IconGroup extends Component {
    constructor(items: any[]) {
        super({ el: 'ul' })
        
        
        items.map(item=>{
            this.append(new IconItem(item.icon.file.url, item.title, item.link, item.color))
        })

        this.style({
            display: 'flex',
            width:'1140px',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            padding: '0',
            flexWrap:'wrap',
            margin: 'auto'
        })

        emitter.on('mini',  () => { this.el.style.width = 'calc(100% - 20px)'; this.el.style.flexDirection = 'column' })
        emitter.on('small', () => { this.el.style.width = '760px'; this.el.style.flexDirection = 'column' })
        emitter.on('large', () => { this.el.style.width = '1140px'; this.el.style.flexDirection = 'row' })
    }


}