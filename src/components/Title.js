import React from 'react'

export default function Title({titleime,textnaslov}) {
    return (
        <div className={titleime}>
            <h1>{textnaslov}</h1>
        </div>
    )
}
