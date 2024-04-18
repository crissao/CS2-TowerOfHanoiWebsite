import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from '@gsilber/webez';
import { HeaderComponent } from "./header/header.component";
import { RodComponent } from "./rod/rod.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 * 
 */
export class MainComponent extends EzComponent {
    private header: HeaderComponent = new HeaderComponent();
    private rod1: RodComponent = new RodComponent();
    private rod2: RodComponent = new RodComponent();
    private rod3: RodComponent = new RodComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.rod1, "rod1")
    }
}
