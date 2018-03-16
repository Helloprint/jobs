import Component from "../../core/component";
import Menu from "./menu";
import Socials from "./socials";
import HeaderContainer from "./header-container";
import Img from "./img";
import Div from "./div";
import Link from "./link";

export default class JobsIcon extends Component {
    constructor(text: string, image: string, link:string) {
        super()

        const lnk = new Link(link,'').style({textDecoration:'none', color:'#333', display:'block'})
        const img = new Img(120, 120, image).style({pointerEvents:'none'})
        const txt = new Div(text).style({ fontSize: '20px', 'fontFamily': 'museo700', padding:'15px', pointerEvents:'none'})

        this.append(lnk.append(img, txt))

        this.style({
            textAlign: 'center',
            width: '100%',
            display: 'inline-block',
            margin: '50px auto'
        })
    }
}