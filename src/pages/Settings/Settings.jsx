import React from 'react'
import { PageAnimated } from '../../components'

import './style.css'

export const Settings = () => {
    return (
        <PageAnimated>
            <div className="settings">
            <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                </div>
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                </div>
            </div>
        </PageAnimated>
    )
}