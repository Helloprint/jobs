import Component from "../../core/component";

export default class H3 extends Component<HTMLHeadingElement> {
    constructor(text = '') {
        super({
            el: 'h3'
        })

        this.el.innerHTML = text
    }

}