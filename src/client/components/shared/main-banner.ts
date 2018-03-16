import Component from "../../core/component";
import Video from "./video";
import Source from "./source";
import { emitter } from "../../core/emitter";
import MainTitle from "./main-title";
import Div from "./div";
import CButton from "./button";

export default class MainBanner extends Component {
    constructor(title: string, poster: string, video1: string, video2: string, modal: string) {
        super()
        console.log(title, poster, video1, video2, modal);
        
        // this.el.id= '#'
        const video = new Video(poster, true, true, false, true).style({
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top:'0',
            left:'0',
            bottom:'0',
            right:'0'
            // top: '50%',
            // left: '50%',
            // transform: 'translate(-50%,-50%)'
        })
        
        video.append(new Source(video1, 'video/mp4'))
        if (video2) video.append(new Source(video2, 'video/webm'))
        const label = new MainTitle(marked(title), '', 'white').style({
            fontSize: '46px',
            color: '#fff',
            fontFamily: 'museo900',
            letterSpacing: '-1.5px',
            zIndex: '999',
            textShadow: '1px 0 2px rgba(0,0,0,.4)',
        })
        // enableInlineVideo(video.el)
        const btns = new Div().style({ display: 'block', width: '500px', margin: '20px', textAlign: 'center', zIndex: '999' })
        const m = new CButton(modal?modal:'/', 'Watch our career movie', 'white', 'transparent', '/images/arrow.png', '_blank')
            .style({ display: 'inline-block', margin: '10px' })
        const j = new CButton('/vacancies', 'See all job opportunities', 'white', 'transparent', '/images/job.png')
            .style({ display: 'inline-block', margin: '10px' })
        btns.append(m, j)
        this.append(/* video, */ label, btns, video)

        this.style({

            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: '0',
            transition: 'all .5s',
            top: '0',
            bottom: '0',
            marginBottom: '0',
            width: '100%',
            height: '100vh',
            // backgroundColor: '#494c55',
            overflow: 'hidden'
        })
        setTimeout(() => this.el.style.opacity = '1', 700)
    }

}