import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";

export default class Header extends Component {
    constructor() {
        super()


        this.append(new HeaderContainer())

        this.style({
            position: 'fixed',
            top: '0',
            zIndex: '1000',
            display:'flex',
            justifyContent:'center',
            height: '48px',
            backgroundColor: 'white',
            width: '100%',
            boxShadow: '0 1px 2px rgba(25,25,25,.5)',
        })
    }
}