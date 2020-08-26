import {form} from '../../utils'
import {TYPES} from '../../types'

export class TextColumnsForm {
    toHTML() {
        return form(TYPES.textColumns, 'Text Columns', [
            {
                name: 'value', 
                placeholder: 'Value',
                value: 'Col 1; Col 2',
            },
            {
                name: 'styles', 
                placeholder: 'Styles',
                value: 'margin-top: 20px',
            },
        ])
    }
}
