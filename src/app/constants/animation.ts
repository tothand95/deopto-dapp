import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const fadeShowAnimation = trigger('fadeShowAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1, position: 'relative' })),
      ],
      { optional: true }
    )
  ]),
]);
