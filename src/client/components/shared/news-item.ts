import Component from "../../core/component";
import Img from "./img";
import H3 from "./h3";
import P from "./p";
import Button from "./button";
import Div from "./div";


export default class NewsItem extends Component<HTMLLIElement> {
    constructor(image: string, title: string, brief: string, href: string, linkText: string) {
        super({ el: 'li' })

        const img = new Img(360, 250, image).style({ borderRadius: '6px' })
        const ttl = new H3(marked(title)).style({ fontSize: '18px' })
        const brf = new Div(marked(brief)).style({ lineHeight: '1.6em', fontSize: '15px' })
        this.append(img, ttl, brf)
        if(href){
            const btn = new Button(href, linkText)
            this.append(btn)

        }


        this.style({
            color: '#333',
            width: '360px',
            margin: '20px auto',
            listStyle: 'none'
        })
    }

}