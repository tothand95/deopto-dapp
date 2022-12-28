import { Component } from '@angular/core';
import { VoteRoot } from 'src/app/components-react/_root';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  VoteRoot = VoteRoot;
}
