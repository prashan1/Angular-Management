import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onClick($event)',
    }
})
export class SafeLinkDirective {
    constructor() {
     console.log('this is directive')   // Add logic to sanitize URLs and prevent potential security vulnerabilities
    }
    onClick(event: Event) {
        console.log('Link clicked');
        let navigationConfirmed: boolean = window.confirm('Are you sure you want to navigate')
        if (navigationConfirmed) {
            return 
        }
        else {
            event.preventDefault();
        }
    }
}