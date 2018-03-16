import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import { emitter } from "../../core/emitter";
import SideMenuToggle from "./side-menu-toggle";
import SideMenuPanel from "./side-menu-panel";
import SideMenuOpac from "./side-menu-opac";

export default class SideMenu extends Component {
    constructor() {
        super()

        const toggle = new SideMenuToggle()
        const panel = new SideMenuPanel()
        const opac = new SideMenuOpac()
        toggle.toggle = active => {
            panel.style({ transform: active ? 'translateX(0)' : 'translateX(200px)' })
            opac.el.style.display = active ? 'block' : 'none'
        }
        opac.tapped = () => { panel.style({ transform: 'translateX(200px)' }); toggle.off() }
        this.append(toggle, opac, panel)
        this.style({
            display: 'none'
        })

        emitter.on('mini', () => this.el.style.display = 'block')
        emitter.on('small', () => this.el.style.display = 'none')
        emitter.on('large', () => this.el.style.display = 'none')
    }
}