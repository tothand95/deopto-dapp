import { Component } from '@angular/core';
import { VoteWrapper } from 'src/app/components-react/_wrapper';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  VoteWrapper = VoteWrapper;
}
