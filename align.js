// Url
const site = window.location.hostname

//Create css_custome function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Function custom_elements

function Create_Element(tag,attr_tag, attr_name, vale){
    const custom_elements = document.createElement(tag)
    custom_elements.setAttrivute(attr_tag, attr_name)
    custom_elements.innerHTML = value
    document.body.append(custom_elements)
}

