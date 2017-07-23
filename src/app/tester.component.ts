import {Component} from '@angular/core'
import { TesterService } from './tester.service'

@Component({
    selector: 'testy',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let tester of testers">
            {{ tester }}
        </li>
    </ul>
    `,
}) 
export class TesterComponent {
    title = "MotherFuck'in testers";
    testers;

    constructor(testService: TesterService) {
        this.testers = testService.getTesters();
    }
}