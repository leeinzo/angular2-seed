import { Component, View } from 'angular2/angular2';

@Component({ 
	selector: 'home' 
})
@View({
	template: `
    <h1>Home</h1>
	<p>{{ test }}</p>	
	`
})
export class HomeComponent {
	test: string;
	
	constructor() {
		this.test = 'Boom';
		console.log(this.test);
	}
}