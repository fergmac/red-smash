import { Template } from 'meteor/templating';
 import { Teams } from '../api/api-teams.js';
import '../../client/main.html';
 
Template.body.helpers({
   teams() {
    return Tasks.find({});
  },
});
