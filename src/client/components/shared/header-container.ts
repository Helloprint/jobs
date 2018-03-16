import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import { emitter } from "../../core/emitter";
import Img from "./img";
import SideMenu from "./side-menu";
import Link from "./link";

export default class HeaderContainer extends Component {
    constructor() {
        super()

        const logo      = new Img(124, 30, '/images/helloprint-logo.svg','Helloprint Logo' ).style({pointerEvents:'none'})
        const menu      = new Menu()
        const socials   = new Socials()
        const sideMenu  = new SideMenu()
        const a         = new Link('/')

        this.append(a.append(logo), menu, socials, sideMenu)
        this.style({
            height: '48px',
            width: '1160px',
            margin: '0 auto',
            paddingTop: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        })

        emitter.on('large', () => this.el.style.width = '1160px')
        emitter.on('small', () => this.el.style.width = '984px')
        emitter.on('mini', () => this.el.style.width = 'calc(100% - 20px)')
    }

    styles = {

    }
}