import {Block} from './block'
import {row, col} from '../../utils'

export class TitleBlock extends Block {
    toHTML() {
        const {tag, styles} = this.options

        return row(col(`
            <${tag}>${this.value}</${tag}>
        `), styles)
    }
}
