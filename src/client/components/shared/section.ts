import Component from "../../core/component";
import Div from "./div";
import Img from "./img";
import { emitter } from "../../core/emitter";
import { Utils } from "../../services/parse-components";

export default class Section extends Component {
    constructor(componentsData: any[], size: string, id: string) {
        super()
        
        this.el.id = id
        componentsData.map((content: any) => {
            const c = Utils.parseComponents(content)
            this.append(c)
        })


        this.style({
            margin: 'auto',
            paddingTop: '0',
            textAlign: 'center',
            marginBottom: '40px',
        })

    }

}