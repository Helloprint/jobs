import Component from "../../core/component";

export default class Link extends Component<HTMLLinkElement> {
    constructor(href: string, text = '', target = '_self', title = '') {
        super({
            el: 'a'
        })

        this.el.textContent = text
        this.el.href = href
        this.el.target = target
        this.el.title = title

        this.el.addEventListener('click', e => { this.click()})
        this.el.addEventListener('mouseover', () => this.hover())
        this.el.addEventListener('mouseleave', () => this.leave())
    }

    hover() { }
    leave() { }
    click() { }

}