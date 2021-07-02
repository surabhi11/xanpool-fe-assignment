import Textfield from '../../common/components/text-field/TextField';
import Button from '../../common/components/button/Button';

import './SearchInputComponent.css';

export default function SearchInputComponent({ ...props }) {
    const {
        searchText,
        handleSearchQuery,
        resetSearch,
        onChange
    } = props;

    return (
        <div className="search-input-wrapper">
            <Textfield
                placeholder="Search users ..."
                text={searchText}
                onChange={onChange}
                onEnterKeyDown={() => handleSearchQuery(searchText)}
                handleClear={resetSearch}
            />

            <div className="search-input-btn-wrapper">
                <div className="buttons-wrapper">
                    <Button
                        label="Search"
                        disabled={!searchText}
                        onClick={() => handleSearchQuery(searchText)} />

                    <Button
                        label="Reset"
                        type="secondary"
                        onClick={resetSearch} />
                </div>
            </div>
        </div>
    );
}
