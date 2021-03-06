import Vessels from '/imports/api/vessels/Vessels.js';
import VesselType from '/imports/api/dropdowns/VesselType.js';

Template['vessel.update'].helpers({
    data() {
        return {
            getMethod: 'vessel.getField',
            backLink: 'vessel.details',
            fields: [{
                key: 'name'
            }, {
                key: 'flag'
            }, {
                key: 'type',
                type: 'dropdown',
                allowedValues: VesselType.allowedValues
            }, {
                key: 'callsign'
            }, {
                key: 'eni'
            }, {
                key: 'imo'
            }, {
                key: 'mmsi'
            }]
        }
    }
});
