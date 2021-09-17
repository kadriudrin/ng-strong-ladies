import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Strong Ladies';
    public options: AnimationOptions = {
        loop: false,
        path: '/assets/store/logo_intro_texting.json',
    };
    setSvgAutoWidth(): void {
        document
            .getElementsByTagName('svg')
            .item(0)
            ?.style.setProperty('width', 'auto', 'important');
    }
}
