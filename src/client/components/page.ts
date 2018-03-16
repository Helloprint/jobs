import Component from "../core/component";
import Header from "./shared/header";
import MainBanner from "./shared/main-banner";
import PageHeader from "./shared/page-header";
import Dummy from "./dummy";
import NewsGroup from "./shared/news-group";
import Footer from "./shared/footer";
import Paragraph from "./shared/paragraph";
import CButton from "./shared/button";
import Section from "./shared/section";
import { Utils } from "../services/parse-components";

export default class Page extends Component {
    path: string
    constructor(data: { path: string, contents: any[] }) {
        super()
        this.path = data.path;
        
        data.contents.map((content: any) => {
            this.append(Utils.parseComponents(content))
        })

        this.style({
            transition:'all .16s'
        })

    }
    hide() {
        this.el.style.opacity = '0'
        setTimeout(() => {
            this.el.style.position = 'absolute'
            this.el.style.display = 'none'
        }, 160);
        this.el.style.pointerEvents = 'none'
        return this
    }
    show() {
        this.el.style.display = 'block'
        this.el.style.opacity = '1'
        this.el.style.position = 'relative'
        this.el.style.pointerEvents = 'all'
    }

}