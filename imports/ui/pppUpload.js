import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './pppUpload.html'

Template.pppUpload.onCreated(() => {
    Template.instance().pppUploadStat = new ReactiveVar(false);
})
Template.pppUpload.helpers({
    pppUploadStat: () => {
        return Template.instance().pppUploadStat.get();
    }
})
Template.pppUpload.events({
    'change [name="pppInput"]'(e, t) {
        t.pppUploadStat.set(true);
        Papa.parse(e.target.files[0], {
            header: true,
            encoding: 'Shift-JIS',
            complete(results, file) {
                /* 添削するならここ */
                Meteor.call('pppUpload', results.data, (e, r) => {
                    if (e) {
                        console.warn(e.reason);
                    } else {
                        t.pppUploadStat.set(false);
                        alert("complete!");
                    }
                })
            }
        })
    }
})