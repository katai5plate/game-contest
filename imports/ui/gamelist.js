import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { DB } from "../api/DB.js"

import './gamelist.html';

Template.games.helpers({
    list(){
        return DB.find();
    },
    comments(a){
        var x=DB.find({_id:a},{comments:1}).fetch().map(v=>v.comments)[0];
        console.log(x);
        return x;
    },
});