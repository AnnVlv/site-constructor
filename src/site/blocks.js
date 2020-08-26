import {TextBlock, TitleBlock, TextColumnsBlock, ImageBlock} from './classes'
import {TYPES} from '../types'

export const BLOCKS = {
    [TYPES.text]: TextBlock,
    [TYPES.title]: TitleBlock,
    [TYPES.textColumns]: TextColumnsBlock,
    [TYPES.image]: ImageBlock
}
