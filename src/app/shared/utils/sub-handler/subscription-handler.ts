import { Subscription } from 'rxjs';

export class SubscriptionHandler {
  private subs: Subscription[] = [];

  set add(sub: Subscription) {
    this.subs.push(sub);
  }

  clear() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
