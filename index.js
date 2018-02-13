import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';

const widgetsCollection = new Mongo.Collection('widgets');

if (Meteor.isServer) {
  Meteor.startup(() => {
    if (widgetsCollection.find().count() === 0) {
      widgetsCollection.insert({ name: 'Widget 1' });
    }
  });

  Meteor.publish('widgets', () => {
    return widgetsCollection.find({ name: undefined });
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('widgets');
  Tracker.autorun(() => {
    console.log(widgetsCollection.find().fetch());
  });
}
