class Subscription {
  constructor(eventName, func) {
    this.eventName = eventName;
    this.func = func;
  }
}

export default Subscription;