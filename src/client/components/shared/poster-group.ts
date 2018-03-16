import Component from "../../core/component";
import MenuItem from "./menu-item";
import { emitter } from "../../core/emitter";
import NewsItem from "./news-item";
import IconItem from "./icon-item";
import PosterItem from "./poster-item";

export default class PosterGroup extends Component {
    constructor(items: any[]) {
        super({ el: 'ul' })
        
        items.map(item=>{
            this.append(new PosterItem(item.image.file.url, item.title))
        })

        this.style({
            display: 'flex',
            flexWrap: 'wrap',
            // width:'1140px',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            padding: '0',
            margin: 'auto'
        })

        emitter.on('mini',  () => { this.el.style.width = 'calc(100% - 20px)'; this.el.style.flexDirection = 'column' })
        emitter.on('small', () => { this.el.style.width = '760px'; this.el.style.flexDirection = 'row' })
        emitter.on('large', () => { this.el.style.width = '1140px'; this.el.style.flexDirection = 'row' })
        emitter.on('huge',  () => { this.el.style.width = '1440px'; this.el.style.flexDirection = 'row' })
    }


}