import { Mongo } from 'meteor/mongo';
import { DB } from "./DB.js"

if(Meteor.isServer){
    Meteor.methods({
        pppUpload: (data) => {
            if (!Array.isArray(data)) {
                TypeError("data is not Arrays");
            }
            /* CSVをインサート */
            DB.rawCollection().insertMany(data);
        }
    })
}