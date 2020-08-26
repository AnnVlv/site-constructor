/* Site */

export const row = (text, styles = '') => `
    <div class="row" style="${styles}">
        ${text}
    </div>
`

export const col = (text, styles = '') => `
    <div class="col-sm" style="${styles}">
        ${text}
    </div>
`

/* Sidebar */

export const form = (name, title, controls) => `
    <h3>${title}</h3>
    <form name="${name}">
        ${formGroups(controls)}
        <button type="submit" class="btn btn-dark">Add</button>
    </form>
`

export const formGroups = controls => {
    let formGroupsHTML = ''
    controls.forEach(control => formGroupsHTML += formGroup(control))
    return formGroupsHTML
}

export const formGroup = ({name, placeholder = '', value = ''}) => `
    <div class="form-group">
        <input type="text" 
                class="form-control" 
                name="${name}" 
                placeholder="${placeholder}"
                value="${value}">
    </div>
`
