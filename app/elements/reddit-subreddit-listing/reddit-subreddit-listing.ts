/// <reference path="../../../typings/tsd.d.ts"/>

import IRedditListing = require('../../scripts/IRedditListing');
import IRedditContent = require('../../scripts/IRedditContent');

Polymer({
    is: 'reddit-subreddit-listing',
    properties: {
        subreddit: String,
        data: String
    },
    getData: function () {
        this.$.ajax.url = 'http://www.reddit.com/r/' + this.subreddit + '.json';
        this.$.ajax.generateRequest();
    },
    isNotSticky: function (item: IRedditContent) {
        return !item.data.stickied
    }
});
