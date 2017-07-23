import {Component} from '@angular/core'
import {CalculatorService} from './calculator.service'

@Component({
    selector: 'calculator',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let calculatis of calculators">
            {{ calculatis }}
        </li>
    </ul>
    `,
}) 
export class CalculatorComponent {
    title = "MotherFucker";
    calculators;

    constructor(calcService: CalculatorService) {
        this.calculators = calcService.getCalculators();
    }
}
