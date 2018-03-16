import Component from "../../core/component";

export default class H2 extends Component<HTMLHeadingElement> {
    constructor(text = '') {
        super({
            el: 'h2'
        })

        this.el.innerHTML = text
    }

}