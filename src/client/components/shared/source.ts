import Component from "../../core/component";

export default class Source extends Component<HTMLSourceElement> {
    constructor(src: string, type: string) {
        super({
            el: 'source'
        })

        this.el.src = src
        this.el.type = type

    }

}