export default function useMetadata() {
    const USER_REPO_DETAILS_MAPPING: Array<any> = [
        {
            key: 'description',
            label: 'Description',
            type: 'text'
        },
        {
            key: 'full_name',
            label: 'Full Name',
            type: 'text'
        },
        {
            key: 'html_url',
            label: 'Repository URL',
            type: 'link'
        },
        {
            key: 'default_branch',
            label: 'Default Branch',
            type: 'text'
        },
        {
            key: 'private',
            label: 'Is Private',
            type: 'boolean'
        },
        {
            key: 'created_at',
            label: 'Created At',
            type: 'date'
        },
        {
            key: 'pushed_at',
            label: 'Last Pushed At',
            type: 'date'
        },
        {
            key: 'open_issues',
            label: 'Open Issues',
            type: 'number'
        }
    ];

    return {
        userRepoDetailFeilds: USER_REPO_DETAILS_MAPPING
    };
}