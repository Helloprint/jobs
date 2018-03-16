import Component from "./core/component";
import { emitter } from "./core/emitter";
import Header from "./components/shared/header";
import Div from "./components/shared/div";
import Footer from "./components/shared/footer";
import Router from "./core/router";
import Contact from "./components/shared/contact";
import Dummy from "./components/dummy";
import Page from "./components/page";
import XHR from "./services/xhr";
import TestJobs from "./components/test-jobs";

export default class App extends Component {
    // currentPage = '/'
    pages: Page[] = [];
    constructor(config: { path: string }) {
        super()


        let currentPage: Page
        const header = new Header()
        const container = new Div().style({
            marginTop: '48px',
            overflowX: 'hidden',
            transition: 'all .16s'
        })

        this.append(header, container)

        window.jobs = cfdata.jobs;



        cfdata.pages.map((pageData: any) => {
            if (pageData) {

                let page = new Page(pageData)
                page.hide()
                container.append(page)
                this.pages.push(page)
                Router.on(page.path, () => {
                    if (currentPage) currentPage.hide()
                    let possiblePage = this.pages.filter(p => p.path == page.path)[0]
                    if (possiblePage) {
                        setTimeout(() => possiblePage.show(), 165)
                        currentPage = possiblePage;
                    }
                })
            }
        })
        Router.on('/test-new-jobs', () => {
            if (currentPage) currentPage.hide()
            let possiblePage = new TestJobs()
            this.append(possiblePage)
            if (possiblePage) {
                setTimeout(() => possiblePage.show(), 165)
                currentPage = possiblePage;
            }
        })
        Router.init()

        emitter.emit('menu-data', cfdata.menu)


        /*  let possiblePage = config.cfdata.pages.filter((pageData: any) => pageData.path == config.path || '/')
         if(possiblePage[0]){
 
             let page = new Page(possiblePage[0])
             console.log('page', page);
             
             container.append(page)
         } */

        /* XHR.get('https://cdn.contentful.com/spaces/kvv4dt7ofnz7/entries?access_token=54b24abd6afbaccb8ff1f2d7a89b784a2fe3f38906aa68af821a09dcb426a3ef&include=10&content_type=application')
            .then((res: any) => {
                console.log(res);

                let fin: any = { fields: {}, refs: [...res.includes.Entry, ...res.includes.Asset] }
                fin.fields.pages = res.items[0].fields.pages.map((page: any) => page = findRef(page.sys.id))
                fin.fields.menu = res.items[0].fields.menu.map((m: any) => m = findRef(m.sys.id))
                window.jobs = res.items[0].fields.jobs.map((m: any) => m = findRef(m.sys.id))



                fin.fields.pages.map((pageData: any) => {
                    console.log(pageData);
                    if (pageData) {

                        let page = new Page(pageData)
                        console.log(page.path);
                        page.hide()
                        container.append(page)
                        this.pages.push(page)
                        Router.on(page.path, () => {
                            if (currentPage) currentPage.hide()
                            let possiblePage = this.pages.filter(p => p.path == page.path)[0]
                            if (possiblePage) {
                                setTimeout(() => possiblePage.show(), 165)
                                currentPage = possiblePage;
                            }
                        })
                    }
                })
                Router.init()

                emitter.emit('menu-data', fin.fields.menu)




                function findRef(refId: string) {

                    let results = fin.refs.filter((item: any) => item.sys.id == refId)[0]
                    if (results) {

                        Object.keys(results.fields).map((key: any) => {
                            let field = results.fields[key]
                            if (field.sys && field.sys.type && field.sys.type == 'Link') {
                                results.fields[key] = findRef(field.sys.id)
                            }
                            if (Array.isArray(field)) {
                                field.map((f: any, i: number) => {
                                    if (f.sys && f.sys.type && f.sys.type == 'Link') {
                                        results.fields[key][i] = findRef(f.sys.id)
                                    }
                                })
                            }
                        })

                        return results.fields
                    }

                }
            }).catch(err => {
                console.log(err);

            })
 */



        window.addEventListener('scroll', e => emitter.emit('scroll'))
        window.addEventListener('resize', e => this.handleSize())
        setTimeout(() => {
            emitter.emit('scroll')
            this.handleSize()
        }, 1000);
        setTimeout(() => {
            emitter.emit('scroll')
            this.handleSize()
        }, 2000);
        setTimeout(() => {
            emitter.emit('scroll')
            this.handleSize()
        }, 4000);
    }



    private handleSize() {
        if (window.innerWidth > 1600)
            emitter.emit('huge');
        if (window.innerWidth > 1200 && window.innerWidth <= 1600)
            emitter.emit('large');
        if (window.innerWidth <= 1200 && window.innerWidth > 980)
            emitter.emit('small');
        if (window.innerWidth <= 980)
            emitter.emit('mini');

    }
}
