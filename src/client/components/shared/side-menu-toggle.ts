import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import { emitter } from "../../core/emitter";
import SideMenuToggleLine from "./side-menu-toggle-line";

export default class SideMenuToggle extends Component {
    active = false
     l1 = new SideMenuToggleLine()
     l2 = new SideMenuToggleLine()
     l3 = new SideMenuToggleLine()
    constructor() {
        super()

        this.append(this.l1, this.l2, this.l3)
        this.el.addEventListener('click', () => {
            this.active = !this.active
            this.toggle(this.active)
            if(this.active){
                this.l3.style({transform: 'rotateZ(45deg) translateY(1.4px)'})
                this.l1.style({transform: 'rotateZ(-45deg) translateY(-1.4px)'})
                this.l2.style({transform: 'scaleX(0)'})
                this.l2.style({opacity: '0'})
            }else{
                
                this.l2.style({opacity: '1'})
                this.l3.style({transform: 'rotateZ(0deg)'})
                this.l1.style({transform: 'rotateZ(0deg)'})
                this.l2.style({transform: 'scaleX(1)'})
            }
        })


        this.style({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            margin: '10px 4px',
            height: '23px',
            width: '28px',
            flexDirection: 'column'
        })

    }
    toggle(active: boolean) { }
    off(){
        this.active = false;
        this.l2.style({opacity: '1'})
        this.l3.style({transform: 'rotateZ(0deg)'})
        this.l1.style({transform: 'rotateZ(0deg)'})
        this.l2.style({transform: 'scaleX(1)'})
    }
}