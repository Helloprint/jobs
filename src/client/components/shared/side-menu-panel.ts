import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import { emitter } from "../../core/emitter";
import MenuItem from "./menu-item";

export default class SideMenuPanel extends Component {
    constructor() {
        super()

        emitter.on('menu-data', (data: any) => {
            data.map((menuData: any) => {
                if (menuData && menuData.title) {
                    let menu = new MenuItem(menuData.title, menuData.link, false, true)
                    this.append(menu)
                    if (menuData.link == window.location.pathname) menu.activate()
                }
            })
        })

        this.style({
            position: 'fixed',
            top: '48px',
            color: 'white',
            right: '0',
            bottom: '0',
            width: '200px',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: 'rgba(0,0,0,.85)',
            transform: 'translateX(200px)',
            transition: 'all .24s',
        })

    }
}