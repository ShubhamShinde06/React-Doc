function customRender(reactElement, box ){

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    box.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if (prop === 'children') continue 
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    box.appendChild(domElement)

}


const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children: "Click me"
}

const MainBox = document.querySelector("#root")

customRender(reactElement, MainBox)

