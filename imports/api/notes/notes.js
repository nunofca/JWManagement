import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

const CollectionManager = require('/imports/api/collection/CollectionManager.js');

let Notes = {};

Notes.schema = new SimpleSchema({
    _id: {
        type: String,
        autoValue: function() {
            if (!this.isSet) {
                return Random.id();
            }
        }
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (!this.isSet) {
                return new Date();
            }
        }
    },
    createdBy: {
        type: String,
        autoValue: function() {
            if (!this.isSet) {
                return Meteor.userId();
            }
        }
    },
    lastChangeBy: {
        type: String,
        autoValue: () => {
            return Meteor.userId();
        }
    },
    lastChangeAt: {
        type: Date,
        autoValue: () => {
            return new Date();
        }
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String,
        autoValue: function() {
            return 'legacy';
        }
    },
    time: {
        type: String,
        autoValue: function() {
            return 'legacy';
        }
    }
});

Notes.name = 'notes';

Notes.uniqueKeys = [];

Notes.attachSchema = Notes.schema;

Notes.persistence = new CollectionManager(Notes, Projects);

export default Notes;
