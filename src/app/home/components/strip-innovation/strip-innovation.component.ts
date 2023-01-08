import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeoptoRoutes } from 'src/app/constants/routes';

@Component({
  selector: 'app-strip-innovation',
  templateUrl: './strip-innovation.component.html',
  styleUrls: ['./strip-innovation.component.scss']
})
export class StripInnovationComponent {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  navigateToVotingProc() {
    this.router.navigate([DeoptoRoutes.VOTING_PROCEDURE], { relativeTo: this.activeRoute.root });
  }

}
