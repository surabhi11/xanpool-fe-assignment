import './CardViewLoader.css';

export default function CardViewLoader() {
    return (
        <div className="loader-wrapper">
            {
                [...new Array(5)].map((a: number, index: number) => {
                    return (
                        <div className="card-view-wrapper__loading" key={index}>
                            <div className="card-view-field__loading">
                                <div className="card-view-field__label"></div>
                                <div className="card-view-field__value"></div>
                            </div>
                            <div className="card-view-field__loading">
                                <div className="card-view-field__label"></div>
                                <div className="card-view-field__value"></div>
                            </div>
                            <div className="card-view-field__loading">
                                <div className="card-view-field__label"></div>
                                <div className="card-view-field__value"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}