import {form} from '../../utils'
import {TYPES} from '../../types'

export class TextForm {
    toHTML() {
        return form(TYPES.text, 'Text', [
            {
                name: 'value', 
                placeholder: 'Value',
                value: 'Some text...',
            },
            {
                name: 'styles', 
                placeholder: 'Styles',
                value: 'color: darkblue;',
            },
        ])
    }
}
