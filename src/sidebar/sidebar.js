import {model} from '../model'
import {FORMS} from './forms'
import {BLOCKS} from '../site/blocks'
import {TYPES} from '../types'

export class Sidebar {
    get template() {
        const forms = []

        for (const key in FORMS) {
            console.log((new FORMS[key]).toHTML())
            forms.push((new FORMS[key]).toHTML())
        }

        return forms.join('')
    }

    constructor(selector, subscriber) {
        this.$el = document.querySelector(selector)
        this.subscriber = subscriber
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    addBlock(event) {
        event.preventDefault()

        const {target} = event

        let {
            name: type, 
            value: {value}, 
            styles: {value: styles}
        } = target

        let tag = ''
        let alt = ''
        let imageStyles = ''

        switch (type) {
            case TYPES.title:
                tag = target.tag.value ? target.tag.value : 'h1'
                break
            case TYPES.image:
                alt = target.alt.value
                imageStyles = target.imageStyles.value
                break
            case TYPES.textColumns:
                value = value.split(';')
                break
        }
    
        model.push(new BLOCKS[type](value, {styles, tag, alt, imageStyles}))
        this.subscriber.next()
    }
}
