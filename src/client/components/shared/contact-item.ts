import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import Img from "./img";
import Div from "./div";
import Link from "./link";

export default class ContactItem extends Component {
    constructor(title: string, body: string) {
        super()

        const txt = new Div(title).style({ fontSize: '16px', 'fontFamily': 'museo700', padding:'0', pointerEvents:'none'})
        const bdy = new Div(marked(body)).style({ fontSize: '15px', 'fontFamily': 'museo500', padding:'10px', lineHeight:'22px', pointerEvents:'none'})

        this.append(txt, bdy)

        this.style({
            textAlign: 'center',
            width: '100%',
            display: 'inline-block',
            margin: '30px auto'
        })
    }
}