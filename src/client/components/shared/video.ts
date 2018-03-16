import Component from "../../core/component";
import { emitter } from "../../core/emitter";

export default class Video extends Component<HTMLVideoElement> {
    loaded = false
    constructor(poster: string, autoplay: boolean, loop: boolean, preload: boolean, playsinline :boolean) {
        super({
            el: 'video'
        })

        var bgImg = new Image();
        bgImg.onload = () => {
            this.el.style.opacity = '1'
            setTimeout(() => {
                console.log('play');
                
                this.el.play()
            }, 1000);
        };

        bgImg.src = poster + '?fm=webp&q=60';
        bgImg.onerror = () => bgImg.onerror = null; bgImg.src = poster + '?fm=' + poster.split('.').reverse()[0] + '&q=60'
        this.el.style.backgroundImage = 'url(' + bgImg.src +')';
        this.loaded = true
        this.el.poster = bgImg.src


        if (autoplay) this.el.setAttribute('autoplay', '')
        if (loop) this.el.setAttribute('loop', '')
        if (preload) this.el.setAttribute('preload', 'auto')
        if (!preload) this.el.setAttribute('preload', 'none')
        if (playsinline) {
            this.el.setAttribute('playsinline', '')
            this.el.setAttribute('webkit-playsinline', '')
            this.el.setAttribute('muted', '')
        }
        this.style({
            opacity: '1',
            // transition: 'all .4s'
        })

    }

}