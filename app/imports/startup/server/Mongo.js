import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Contacts } from '../../api/contact/Contact';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

function addContact(data) {
  console.log(`  Adding: ${data.firstName} (${data.owner})`);
  Stuffs.insert(data);
}

if (Contacts.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts data.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}
