import IRedditContent = require('./IRedditContent');

interface IRedditListing {
    kind: string;
    data: {
        modhash: string;
        children: IRedditContent[];
        after: string;
        before: string;
    }
}

export = IRedditListing;
