import React from 'react';


export default function Header({imeheadera,children}) {
    return (
        <div className={imeheadera}>
          {children}
        </div>
    )
}
