export default function useMetadata() {
    const USER_DETAILS_MAPPING: Array<any> = [
        {
            key: 'id',
            label: 'Profile Id',
            type: 'text'
        },
        {
            key: 'html_url',
            label: 'Profile URL',
            type: 'link'
        },
        {
            key: 'type',
            label: 'Type',
            type: 'text'
        },
        {
            key: 'site_admin',
            label: 'Is Site Admin',
            type: 'boolean'
        }
    ];

    return {
        userDetailFeilds: USER_DETAILS_MAPPING
    };
}