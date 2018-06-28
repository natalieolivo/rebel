"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// component functionality is encapsulated here
class PageHead extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.getPageHeadTemplate().then((html) => {
            // Element functionality written in here
            const domParser = new DOMParser();
            const templateDom = domParser.parseFromString(html, 'text/html');
            const template = templateDom.getElementById('page-head');
            if (template) {
                const templateContent = template.content;
                const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
            }
        });
    }
    getPageHeadTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const html = yield (yield fetch('/components/page-head/page-head.component.html')).text();
            return html;
        });
    }
}
exports.PageHead = PageHead;
