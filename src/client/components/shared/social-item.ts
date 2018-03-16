import Component from "../../core/component";
import Img from "./img";
import Link from "./link";


export default class SocialItem extends Component<HTMLLIElement> {
    constructor(src: string, href: string) {
        super({ el: 'li' })


        this.append(new Link(href,'','_blank').append(new Img(26, 26, src)))

        this.style ({
            margin: '0 5px',
            listStyle: 'none'
        })
    }

}