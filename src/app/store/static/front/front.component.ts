import { Component } from '@angular/core';

@Component({
    selector: 'front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.scss'],
    host: { class: 'fillRoute' },
})
export class FrontComponent {
    constructor() {}
}
