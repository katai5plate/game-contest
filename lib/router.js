import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/', {
    name: "root",
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {
            top:    'pppUpload',
            body:   'games',
            bottom: '',
        });
    }
});