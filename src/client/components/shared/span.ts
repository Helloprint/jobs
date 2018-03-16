import Component from "../../core/component";

export default class Span extends Component<HTMLSpanElement> {
    constructor(text = '') {
        super({
            el: 'span'
        })

        this.el.innerHTML = text
    }

}