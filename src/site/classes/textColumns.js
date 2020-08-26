import {Block} from './block'
import {row, col} from '../../utils'

export class TextColumnsBlock extends Block {
    toHTML() {
        const rows = this.value.map(item => col(item))
        return row(rows.join(''), this.options.styles)
    }
}
