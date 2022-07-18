import React from 'react'
import './Province-item.css'

class Province_item extends React.Component {
    render()
    {
        return(
            <div className='province_container'>
                <button className='province_button' onClick={this.props.click} value={this.props.name}>
                    {this.props.name != null? this.props.name : "null"}
                </button>
            </div>
        )
    }
    
}

export default Province_item