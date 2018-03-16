import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import { emitter } from "../../core/emitter";
import MenuItem from "./menu-item";

export default class SideMenuOpac extends Component {
    constructor() {
        super()

        this.el.addEventListener('click', ()=>this.tapped())
        this.el.addEventListener('click', ()=>this.el.style.display = 'none')

        this.style({
            position: 'fixed',
            top: '48px',
            display:'none',
            right: '0',
            bottom: '0',
            left: '0',
            backgroundColor: 'rgba(0,0,0,.0)',
        })

    }

    tapped(){
        
    }
}