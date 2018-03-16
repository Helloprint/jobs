import Component from "../../core/component";

export default class Div extends Component<HTMLDivElement> {
    constructor(text = '') {
        super()

        this.el.innerHTML = text
    }

}