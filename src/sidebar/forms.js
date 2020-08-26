import {TextForm, TitleForm, TextColumnsForm, ImageForm} from './classes'
import {TYPES} from '../types'

export const FORMS = {
    [TYPES.text]: TextForm,
    [TYPES.title]: TitleForm,
    [TYPES.textColumns]: TextColumnsForm,
    [TYPES.image]: ImageForm
}
