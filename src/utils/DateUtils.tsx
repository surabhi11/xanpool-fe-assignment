export function getFormattedDate(date: string) {
    if (date) {
        return new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        }).replace(/ /g, '-');
    }
    return '-';
}