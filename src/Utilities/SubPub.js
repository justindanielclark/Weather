import Subscription from "./Subscription";
import SubscriptionList from "./SubscriptionList";

const SubPub = ()=>{
  const _subscriptions = new SubscriptionList();
  function publish(eventName, passedVal = {}){
    const eventsList = _subscriptions.getSubscriptions(eventName);
    if(eventsList instanceof Array){
      [...eventsList].forEach(subscription => {
        subscription.func(passedVal);
      });
    }
  }
  function _subscribe(...subscriptions){
    subscriptions.forEach(subscription => {
      _subscriptions.addSubscription(subscription);
      this.subscriptions.addSubscription(subscription);
    });
  }
  function _unsubscribe(...subscriptions){
    subscriptions.forEach(subscription=>{
      this.subscriptions.removeSubscription(subscription);
      _subscriptions.removeSubscription(subscription);
    })
  }
  function _unsubscribeAll(){
    const SubList = this.subscriptions.list;
    const Subs = [];
    Object.keys(SubList).forEach(key=>{
      Subs.push(...SubList[key]);
    });
    Subs.forEach(sub => {
      this.unsubscribe(sub);
    });
  }
  function subscriberWrapper(object){ 
    object.unsubscribe = _unsubscribe;
    object.unsubscribeAll = _unsubscribeAll;
    object.subscribe = _subscribe;
    object.subscriptions = new SubscriptionList();
    return object;
  } 
  function publisherWrapper(object){ 
    object.publish = publish;
    return object;
  }
  function wrapper(object){ 
    subscriberWrapper(object);
    publisherWrapper(object);
  }
  return {
    publish, 
    publisherWrapper,
    subscriberWrapper, 
    Subscription, 
    wrapper,
  } 
 };

 export default SubPub;