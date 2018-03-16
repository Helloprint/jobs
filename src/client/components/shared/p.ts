import Component from "../../core/component";

export default class P extends Component<HTMLHeadingElement> {
    constructor(text = '') {
        super({
            el: 'p'
        })

        this.el.innerHTML = text
    }

}