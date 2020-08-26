import {form} from '../../utils'
import {TYPES} from '../../types'

export class ImageForm {
    toHTML() {
        return form(TYPES.image, 'Image', [
            {
                name: 'value', 
                placeholder: 'Value', 
                value: 'https://www.google.com/logos/doodles/2020/ukraine-independence-day-2020-6753651837108509-s.png',
            },
            {
                name: 'styles', 
                placeholder: 'Styles',
                value: 'padding: 10px;',
            },
            {
                name: 'alt', 
                placeholder: 'Alt',
                value: 'test-alt',
            },
            {
                name: 'imageStyles', 
                placeholder: 'Image Styles',
                value: 'width: 200px; height: auto;',
            },
        ])
    }
}
