import Component from "../core/component";
import Dummy from "../components/dummy";
import PageHeader from "../components/shared/page-header";
import NewsGroup from "../components/shared/news-group";
import Footer from "../components/shared/footer";
import Paragraph from "../components/shared/paragraph";
import CButton from "../components/shared/button";
import Section from "../components/shared/section";
import MainTitle from "../components/shared/main-title";
import PositionList from "../components/shared/position-list";
import Contact from "../components/shared/contact";
import IconGroup from "../components/shared/icon-group";
import PosterGroup from "../components/shared/poster-group";
import FixedBanner from "../components/shared/fixed-banner";
import Flexbox from "../components/shared/flexbox";
import MainBanner from "../components/shared/main-banner";

export class Utils {
    static parseComponents(content: any): Component {
        
        let component = new Dummy()
        try {
            switch (content.type.name) {
                case 'page-header-component':
                
                    component = new PageHeader(content.title, content.subtitle, content.backgroundImage.file.url, content.icon?content.image.file.url:'')
                    break
                case 'news-group-component':
        
                    component = new NewsGroup(content.items)
                    break
                case 'footer-component':
                    component = new Footer(content.logo.file.url, content.backgroundImage.file.url, content.body)
                    break
                case 'paragraph-component':
                    component = new Paragraph(content.body, content.columns, content.isFull, content.align, content.textSize, content.color)
                    break
                case 'button-component':        
                    component = new CButton(content.link, content.title, content.color, content.backgroundColor, content.hoverImage?content.hoverImage.file.url:'')
                    break
                case 'section-component':
                
                    component = new Section(content.contents, content.size, content.id)
                    break
                case 'flexbox-component':
                    component = new Flexbox(content.items)
                    break
                case 'main-title-component':
                    component = new MainTitle(content.title, content.subtitle, content.color)
                    break
                case 'positions-list-component':
                    component = new PositionList(content.team)
                    break
                case 'contact-us-component':
                    component = new Contact(content.items)
                    break
                case 'icon-group-component':
                
                    component = new IconGroup(content.items)
                    break
                case 'poster-group-component':
                    component = new PosterGroup(content.items)
                    break
                case 'fixed-banner-component':
                    component = new FixedBanner(content.backgroundImage.file.url, content.items)
                    break
                case 'main-banner-component':
                
                    component = new MainBanner(content.title, content.poster.file.url, content.videoOne.file.url, content.videoTwo?content.videoTwo.file.url:'', content.videoModal?content.videoModal.file.url:'')
                    break
            }
            return component
        } catch (err) {
            return component
        }
    }
}