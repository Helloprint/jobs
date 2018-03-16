import Component from "../../core/component";
import PositionItem from "./position-item";
import XHR from "../../services/xhr";
import Div from "./div";



export default class PositionList extends Component {
    constructor(teamId: string) {
        super()
        
        this.append(new Div('Loading positions...').style({color:'gray'}))
        XHR.get('/api/jobs').then((jobs: any) => {
            this.removeChildren()
            if(jobs.length==0)
                this.append(new Div('No position is available...').style({color:'gray'}))
            if (jobs.length) {
                this.append(new PositionItem('POSITION', 'DEPARTMENT', 'LOCATION', '', 0, true).style({ backgroundColor: '#dcdcdc' }))
                jobs
                    .sort((a, b) => !b.department?-1: a.department > b.department ? 1 : a.department < b.department ? -1 :0)
                    .map((p: any, i: number) => {

                        if (p) this.append(new PositionItem((p.title.split(' - ')[0] || '').toUpperCase(), (p.department || '').toUpperCase(), (p.city || '').toUpperCase(), p.url, i % 2, false))
                    })
            } else {
                this.el.innerHTML = 'No jobs available currently :('
            }
        })


        this.style({
            overflowX: 'hidden',
            textAlign: 'center',
            marginTop: '48px',
            marginBottom: '68px',
            fontSize: '18px',
            transition: 'all .16s'
        })
    }


}