import {Block} from './block'
import {row, col} from '../../utils'

export class TextBlock extends Block {
    toHTML() {
        return row(col(`
            <p style="${this.options.styles}">${this.value}</p>
        `), this.options.styles)
    }
}
