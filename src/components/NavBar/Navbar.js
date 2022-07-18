import React from 'react'
import './Navbar.css'
import ToggleButton from './MobileMenu/ToggleButton'
import Province_item from './Province-Item/Province-item'
class Navbar extends React.Component{
    render()
    {
        return(
        <div className='navbar' >
            <Province_item name="Alberta" click={this.props.provinceclick}/>
            <Province_item name="British Columbia" click={this.props.provinceclick}/>
            <Province_item name="Manitoba" click={this.props.provinceclick}/>
            <Province_item name="New Brunswick" click={this.props.provinceclick}/>
            <Province_item name="Newfoundland & Labrador" click={this.props.provinceclick}/>
            <Province_item name="Nova Scotia" click={this.props.provinceclick}/>
            <Province_item name="Ontario" click={this.props.provinceclick}/>
            <Province_item name="Prince Edward Island" click={this.props.provinceclick}/>
            <Province_item name="Quebec" click={this.props.provinceclick}/>
            <Province_item name="Saskatchewan" click={this.props.provinceclick}/>
            <ToggleButton click={this.props.click}/>
        </div>
        )
    }
};

export default Navbar;