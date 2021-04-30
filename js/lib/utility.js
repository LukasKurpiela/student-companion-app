export { createElement };

function createElement(tagName, classNames, parentNode, text = '') {
  const newElement = document.createElement(tagName);
  classNames.forEach((className) => {
    newElement.classList.add(className);
  });
  newElement.innerText = text;
  parentNode.appendChild(newElement);
  return newElement;
}
