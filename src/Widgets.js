import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="Widgets__article">
                <div className="Widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="Widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="Widgets">
            <div className="Widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle('NYPD Daily', 'Ray is back')}
            {newsArticle('99 Report', 'Gina is gone')}
        </div>
    )
}
export default Widgets
