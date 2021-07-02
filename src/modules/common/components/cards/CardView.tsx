import { getFormattedDate } from '../../../../utils/DateUtils';

import './CardView.css';

export default function CardView({ ...props }) {
    const {
        titleField,
        fields,
        data,
        handleCardClick
    } = props;

    // handle custom redirection with new link
    function handleRedirection(event: React.MouseEvent, link: string) {
        event.stopPropagation();
        event.preventDefault();
        window.open(link, '_blank');
    }

    // get custom fields based on type
    function getValueBasedOnType(field: any, value: any) {
        switch (field.type) {
            case 'text':
            case 'number':
                return getFieldElement(field.label, value);
            case 'link':
                return (
                    <div
                        className="card-view-field__value_link"
                        onClick={(event: React.MouseEvent) => handleRedirection(event, value)}> {field.label}
                    </div>
                );
            case 'date':
                return getFieldElement(field.label, getFormattedDate(value));
            case 'boolean':
                return getFieldElement(field.label, (value ? 'Yes' : 'No'));
            default:
                return;
        }
    }

    // return card field display element
    function getFieldElement(key: string, value: string) {
        return (
            <>
                <div className="card-view-field__label">{key}</div>
                <div className="card-view-field__value">{value || '-'}</div>
            </>
        );
    }

    return (
        <div data-testid="card-view" className='card-view-wrapper' onClick={() => handleCardClick(data)}>
            {titleField &&
                <div className="card-view-field">
                    <div className="card-view-field__title">{data[titleField]}</div>
                </div>
            }

            {fields.map((field: any, index: number) => {
                return (
                    <div className="card-view-field" key={index}>
                        {/* field label with value */}
                        {getValueBasedOnType(field, data[field['key']])}
                    </div>
                )
            })}
        </div>
    )
}