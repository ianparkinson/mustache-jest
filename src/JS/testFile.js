const template = require('./testTemplate.html').default;

/**
 *
 * @param {HTMLDivElement} div
 * @param {object} data
 */
module.exports = function renderToDiv(div, data) {
  const htmlCompiled = template(data);

  div.innerHTML = htmlCompiled;
};
