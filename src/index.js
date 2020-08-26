import {model} from './model'
import {Site} from './site/site'
import {Sidebar} from './sidebar/sidebar'
import './styles/main.css'

const renderSite = () => site.render(model)

export const site = new Site('#site')
renderSite()

const sidebar = new Sidebar('#panel', {
    next: renderSite
})
sidebar.init()
