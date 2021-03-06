import Permissions from '/imports/api/util/Permissions.js';

Template['admin.details'].helpers({
    data() {
        return {
            getMethod: 'admin.get',
            backLink: 'home',
            sections: [
                {
                    header: 'administration',
                    contents: [
                        {
                            key: 'settings',
                            link: 'settings',
                            canSee: Permissions.shiftAdmin
                        }, {
                            key: 'users',
                            link: 'users',
                            canSee: Permissions.admin
                        }, {
                            key: 'publishers',
                            link: 'user.search',
                            canSee: Permissions.admin
                        }, {
                            key: 'reports',
                            link: 'reports',
                            canSee: Permissions.shiftAndStoreAdmin
                        }, {
                            key: 'store',
                            link: 'store',
                            canSee: Permissions.storeAdmin
                        }, {
                            key: 'vessels',
                            link: 'vessel.search',
                            canSee: Permissions.member,
                            custom: (project) => {
                                return project.vesselModule == true;
                            }
                        }, {
                            key: 'notes',
                            link: 'note.details',
                            canSee: Permissions.shiftAndStoreAdmin
                        }
                    ]
                }
            ]
        }
    }
});
