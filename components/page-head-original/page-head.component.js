function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//component functionality is encapsulated here
var PageHead = function (_HTMLElement) {
  _inherits(PageHead, _HTMLElement);

  function PageHead() {
    _classCallCheck(this, PageHead);

    // Element functionality written in here
    var _this = _possibleConstructorReturn(this, (PageHead.__proto__ || Object.getPrototypeOf(PageHead)).call(this));
    // Always call super first in constructor


    var template = document.getElementById('page-head');
    var templateContent = template.content;
    var shadowRoot = _this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
    return _this;
  }

  return PageHead;
}(HTMLElement);

// Define the new element


customElements.define('page-head', PageHead);