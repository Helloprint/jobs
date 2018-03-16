import Component from "../../core/component";

export default class H4 extends Component<HTMLHeadingElement> {
    constructor(text = '') {
        super({
            el: 'h4'
        })

        this.el.innerHTML = text
    }

}