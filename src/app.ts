import {HelloWorld} from './models/helloWorld';

let helloWorld = new HelloWorld("Ts Beginner");

const element = <HTMLInputElement>document.getElementById('hello-world');
element.innerHTML = helloWorld.show();