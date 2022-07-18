import React from 'react'
import './Province-side.css'

class Province_side extends React.Component {
    render()
    {
        return(
            <div className='province_container_side'>
                <button className='province_button_side' onClick={this.props.click} value={this.props.name}>
                    <p>{this.props.name != null? this.props.name : "null"}</p>
                </button>
            </div>
        )
    }
    
}

export default Province_side