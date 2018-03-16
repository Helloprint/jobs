import { emitter } from "./emitter";

export default class Router {
    private static currentPathName = ''
    private static currentHash = '#'
    private static routes: any = {}
    public static on(route: string, handler: Function) {
        const regex = new RegExp(route.split('/').slice(1).reduce((reg, next) => reg + '/' + (next.indexOf(':') == 0 ? '\\w+.*' : next), '') + '$')
        this.routes[route] = { handler: handler, regex: regex }
        return this
    }

    public static route(route: string) {
        
        const newPathName = route.split('#')[0]
        const newHash = '#' + (route.split('#')[1] || '')

        if (newPathName !== this.currentPathName) {
            Object.keys(this.routes).map(key => {
                if (this.routes[key].regex.test(newPathName)){
                    
                    this.routes[key].handler(newPathName.split('/').reverse()[0])
                }
            })
            // if (this.routes[newPathName]) this.routes[newPathName]()
            this.currentPathName = newPathName

        }
        if (newHash) {
            setTimeout(() => {
                const el = document.getElementById(newHash);
                if (el) {
                    window.scrollBy({ left: 0, top: el.getBoundingClientRect().top - 48, behavior: 'smooth' });
                } else {
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                }
            }, 200);
            setTimeout(() => {
                emitter.emit('scroll');
            }, 400);
        } else {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }

        window.history.pushState('', '', route);
        emitter.emit('route-change', route)
    }

    public static init() {
        window.onpopstate = path => this.route(window.location.pathname + window.location.hash)
        /* for(let l = 0; l< document.links.length; l++){
            
            document.links[l].addEventListener('click', e=>{
                e.preventDefault()
                if (document.links[l].href.indexOf(window.location.origin) > -1) {
                    let path = document.links[l].href.replace(window.location.origin, '')
                    console.log(path);
                    
                }
                
        
            })
            
        } */
            
        document.addEventListener('click', e => {
            
            if (e.target && e.target.href && e.target.href.indexOf(window.location.origin) > -1) {
                e.preventDefault()
                let path = e.target.href.replace(window.location.origin, '')
                this.route(path);
            }
        })
        this.route(window.location.pathname + window.location.hash)
    }
}