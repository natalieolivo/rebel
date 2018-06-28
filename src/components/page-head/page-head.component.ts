// component functionality is encapsulated here
export class PageHead extends HTMLElement {
    public constructor() {
        // Always call super first in constructor
        super();

        this.getPageHeadTemplate().then((html: string) => {
            // Element functionality written in here
            const domParser = new DOMParser();
            const templateDom = domParser.parseFromString(html, 'text/html');
            const template: any = <any>templateDom.getElementById('page-head');
            if (template) {
                const templateContent = template.content;
                const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
            }
        });
    }

    private async getPageHeadTemplate() {
        const html: string = await (await fetch('/components/page-head/page-head.component.html')).text();
        return html;
    }
}
