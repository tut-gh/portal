import React from 'react'
import Button from '@material-ui/core/Button'

function Form(){
    const style = {
        height : '100px',
        width : 'auto',
    }
    return(
        <div>
            <Button style = {style}
                onClick ={() => window.location.href = 'https://forms.gle/WQ3zw2AJ32Gz1Cmu8'}
            > Click me to Book the room</Button>
        </div>
    )
}

export default Form
