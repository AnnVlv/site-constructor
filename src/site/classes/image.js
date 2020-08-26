import {Block} from './block'
import {row, col} from '../../utils'

export class ImageBlock extends Block {
    toHTML() {
        const {alt, styles, imgStyles} = this.options

        return row(col(`
            <img src=${this.value} alt=${alt} style="${imgStyles}"/>
        `), styles)
    }
}
