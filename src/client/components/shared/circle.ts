// border: 2px solid #fff;
// border-radius: 50%;
// height: 115px;
// width: 115px;
// display: inline-block;
// position: relative;

import Component from "../../core/component";

export default class Circle extends Component<HTMLDivElement> {
    constructor(size = 115) {
        super()

        this.style({
            border: '2px solid #fff',
            borderRadius: '50%',
            height: size + 'px',
            width: size + 'px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        })
    }

}