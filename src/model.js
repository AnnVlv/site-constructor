import image from './assets/1.png'
import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './site/classes'

export const model = [
    new TitleBlock('JS site\'s constructor', {
        styles: 'background: darkred; color: white; padding: 20px; text-align: center;',
        tag: 'h1'
    }),
    new TextBlock('Text', {
        styles: 'background: yellow; color: darkred; padding: 5px;'
    }),
    new TextColumnsBlock([
        'Col 1',
        'Col 2',
        'Col 3'
    ], {
        styles: 'padding-top: 10px;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 10px; margin-top: 20px; text-align: center;',
        imgStyles: 'width: 200px; height: auto;',
        alt: 'my-image'
    })
]
