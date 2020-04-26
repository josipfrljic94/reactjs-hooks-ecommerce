import React from 'react'
import Button from 'react-bootstrap/Button'

export default function MyButton({gumbtekst,variant}) {
    return (
        <Button variant={variant}size="lg" >
            {gumbtekst}
        </Button>
    )
}



