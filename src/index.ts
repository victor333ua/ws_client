function component() {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Hello World</>';
    return element;
}

document.body.appendChild(component());