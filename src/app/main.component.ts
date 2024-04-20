import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue, ValueEvent, Change } from '@gsilber/webez';
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
    @BindValue("rings_variant")
    private rings_variant: string = "three";
    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.rod1, "rod1");
        this.addComponent(this.rod2, "rod2");
        this.addComponent(this.rod3, "rod3");
    }
    @Change("rings_variant")
    onOperationChange(event: ValueEvent) {
    this.rings_variant = event.value;
    }
}
