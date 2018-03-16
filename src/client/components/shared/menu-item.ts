import Component from "../../core/component";
import { emitter } from "../../core/emitter";
import CLink from "./c-link";


export default class MenuItem extends Component<HTMLLIElement> {
    isActive = false
    constructor(text: string, public href: string, isActive: boolean, public onSideMenu?: boolean) {
        super({ el: 'li' })

        const link = new CLink(href, text, '', onSideMenu ? 'white' : '#252525')

        this.append(link)

        emitter.on('route-change', (route: string) => this.handleActivation(route))

        this.style({
            fontFamily: 'museo500',
            margin: '0 8px',
            listStyle: 'none',
            padding: onSideMenu ? '12px' : '0'
        })

    }

    activate() {
        this.el.style.fontFamily = 'museo700'
        this.el.style.opacity = this.onSideMenu ? '1' : '1'
    }
    deactivate() {
        this.el.style.fontFamily = 'museo500'
        this.el.style.opacity = this.onSideMenu ? '.6' : '1'
    }
    handleActivation(route: string) {
        route == this.href ? this.activate() : this.deactivate()
    }

}