import Component from "../../core/component";
import MenuItem from "./menu-item";
import { emitter } from "../../core/emitter";

export default class Menu extends Component {
    activeItem: MenuItem
    constructor() {
        super({ el: 'ul' })

        emitter.on('menu-data', (data: any) => {
            data.map((menuData: any) => {
                if(menuData && menuData.title){
                    let menu = new MenuItem(menuData.title, menuData.link, false)
                    this.append(menu)
                    if (menuData.link == window.location.pathname) menu.activate()
                }
            })
        })

        this.style({
            display: 'flex',
            transition: 'all .4s',
            opacity: '0',
            alignItems: 'baseline',
            padding: '0',
            margin: '0'
        })
        emitter.once('scroll', () => setTimeout(() => this.el.style.opacity = '1', 400))
        emitter.on('mini', () => this.el.style.display = 'none')
        emitter.on('small', () => this.el.style.display = 'flex')
        emitter.on('large', () => this.el.style.display = 'flex')
    }

    hide() {
        this.el.style.display = 'none';
    }

}