import {Component} from 'angular2/core';

import {HeroFormComponent} from './hero-form.component'

@Component({
    selector:'app',
    template:'<hero-form></hero-form>',
    directives: [HeroFormComponent]    
})
export class AppComponent {

    

} 
