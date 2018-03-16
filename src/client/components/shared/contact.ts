import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import JobsIcon from "./jobs-icon";
import Div from "./div";
import { emitter } from "../../core/emitter";
import ContactItem from "./contact-item";

export default class Contact extends Component {
    constructor(items: any[]) {
        super()

        items.map((item: any) => {
            this.append(new ContactItem(item.title, item.body))
        })
        
        this.style({
            textAlign: 'center',
            width: '50%',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '30px auto 50px auto'
        })

        emitter.on('mini', () => this.el.style.flexDirection = 'column')
        emitter.on('small', () => this.el.style.flexDirection = 'row')
        emitter.on('large', () => this.el.style.flexDirection = 'row')
    }
}