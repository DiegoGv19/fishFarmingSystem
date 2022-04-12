import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

export function expand(): any {
    return trigger('expand', [
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-50%)', opacity: 0 }),
        animate(
          '400ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]);
}