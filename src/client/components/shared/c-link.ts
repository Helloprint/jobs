import Link from "./link";

export default class CLink extends Link {
    constructor(href: string, text = '',  title = '', color:string){
        super(href, text,'_self', title )

        this.hover = () => this.style({ textDecoration: 'underline' })
        this.leave = () => this.style({ textDecoration: 'none' })
        this.style({ color: color,  textDecoration: 'none' })
    }
}