import React from 'react'

const SeriesComDetails = props => {
    return (
        <div className="ui grid">
            {
                props.details.map(detail => {
                    return (
                        <div className="four wide column">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`} alt="Avatar" style={{ width: "225px", height: "300px" }}></img>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1 className="font">{`${detail.title}`}</h1>
                                        {
                                            detail.description ? <p className="font">{`${detail.description}`}</p> : <p className="font">No description provided</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default SeriesComDetails;