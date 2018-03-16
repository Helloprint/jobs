import Component from "../../core/component";

export default class H1 extends Component<HTMLHeadingElement> {
    constructor(text = '') {
        super({
            el: 'h1'
        })

        this.el.innerHTML = text
    }

}