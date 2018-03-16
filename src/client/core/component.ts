export type CS = {
    [P in keyof CSSStyleDeclaration]?: any;
};

export interface IElConfig {
    el?: string
}
export default abstract class Component<T extends HTMLElement = HTMLDivElement> {
    el: T
    constructor(config: IElConfig = {}) {
        this.el = <T>document.createElement(config.el || 'div')
        return this
    }

    append(...args: Component<any>[]) {
        args.map(component => {
            this.el.appendChild(component.el)
        })
        return this
    }

    style(style: CS) {
        Object.keys(style).map((s: keyof CSSStyleDeclaration) => {
            if (s != 'length' && s != 'parentRule') {
                this.el.style[s] = typeof style[s] == 'function' ? style[s]() : style[s]
                
                if(s=='display' && style[s]=='flex') {
                    // this.el.style.cssText = `display:-webkit-box;display:-webkit-flex;display:flex`
                    this.el.style.display = '-webkit-box'
                    // this.el.style.display = '-moz-box'
                    this.el.style.display = '-webkit-flex'
                    // this.el.style.display = '-ms-flexbox'
                    this.el.style.display = 'flex'
                }
                if(s=='flexDirection') {
                    this.el.style.webkitFlexDirection = style[s]
                    this.el.style.flexDirection = style[s]
                    this.el.style.webkitFlexWrap = style[s]
                    // this.el.style.cssText = ` flex-wrap: wrap;-webkit-flex-wrap: wrap;`
                    
                }
                if(s=='flexWrap') {
                    this.el.style.webkitFlexWrap = style[s]
                    this.el.style.flexWrap = style[s]                 
                }
                if(s=='justifyContent') {
                    this.el.style.webkitJustifyContent = style[s]
                    this.el.style.justifyContent = style[s]
                }
                if(s=='alignItems') {
                    this.el.style.webkitAlignItems = style[s]
                    this.el.style.alignItems = style[s]
                }
                if(s=='transform') {
                    // console.log( `-webkit-transform:${style[s]};transform:${style[s]}`);
                    
                    // this.el.style.cssText = `-webkit-transform:${style[s]};transform:${style[s]}`
                    this.el.style.webkitTransform =  style[s]
                    this.el.style.transform =  style[s]
                }
            }
        })
        return this
    }

    removeChildren(){
        while (this.el.firstChild) this.el.removeChild(this.el.firstChild)
        return this
    }
}
