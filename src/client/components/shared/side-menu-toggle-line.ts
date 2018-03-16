import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import { emitter } from "../../core/emitter";

export default class SideMenuToggleLine extends Component {
    active = false
    constructor() {
        super()




        this.style({
            display: 'block',
            height: '5px',
            borderRadius:'2px',
            width: '28px',
            transition:'all .2s',
            transformOrigin:'right center',
            backgroundColor: '#555',
        })

    }
}