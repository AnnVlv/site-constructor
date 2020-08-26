import {form} from '../../utils'
import {TYPES} from '../../types'

export class TitleForm {
    toHTML() {
        return form(TYPES.title, 'Title', [
            {
                name: 'value', 
                placeholder: 'Value',
                value: 'Title Example',
            },
            {
                
                name: 'styles', 
                placeholder: 'Styles',
                value: 'color: darkred;',
            },
            {
                name: 'tag', 
                placeholder: 'Tag',
                value: 'h2',
            },
        ])
    }
}
