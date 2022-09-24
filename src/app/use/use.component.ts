import { Component, Inject } from '@angular/core';
import { UseService } from '../service/use.service';

@Component({
  selector: 'my-use',
  providers: [{ provide: UseService, useClass: UseService }],
  template: '<li>useService :{{ current }}</li>',
})
export class UseComponent {
  current: string;
  constructor(@Inject(UseService) private useService: UseService) {
    this.current = useService.show();
  }
}
