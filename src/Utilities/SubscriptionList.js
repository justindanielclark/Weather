class SubscriptionList {
  constructor() {
    this.list = {
      //eventName: [subscription, subscription]
      //eventName2: [subscription, subscription, subscription]
    };
  }
  addSubscription(subscription) {
    const { eventName } = subscription;
    if (this.list[eventName] instanceof Array) {
      this.list[eventName].push(subscription);
    } else {
      this.list[eventName] = [subscription];
    }
  }
  removeSubscription(subscription) {
    const { eventName } = subscription;
    const eventsArray = this.list[eventName];
    if (eventsArray instanceof Array) {
      const eventIndex = eventsArray.indexOf(subscription);
      if (eventIndex >= 0) {
        eventsArray.splice(eventIndex, 1);
      }
    }
  }
  getSubscriptions(eventName) {
    return this.list[eventName];
  }
}
export default SubscriptionList;