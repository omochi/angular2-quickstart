import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

class Cat {
	name: string;
	age: number;

	constructor(name: string) {
		this.name = name;
	}

	greet(): void {
		console.log("I am " + this.name);
	}
}

var cat1 = new Cat("tama");
cat1.greet();

var cat2 = {
	name: "mike",
	age: 3
};
cat2.greet();

var cat3 = {
	namae: "hoge",
	hage: 4
};
cat3.greet();

bootstrap(AppComponent);
