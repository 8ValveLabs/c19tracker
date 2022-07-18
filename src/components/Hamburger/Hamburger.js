import React from 'react';
import './Hamburger.css';
import Province_side from'./Province-side/Province-side'
const sideDrawer = props => {
    let drawerClass = ['Hamburger'];
    if (props.show) {
        drawerClass = ['Hamburger', 'open'];
    }
    return (
    <nav className={drawerClass.join(' ')}>
        <div className="close-container">
            <button className="closeButton" onClick={props.click}>X</button>
        </div>
        <div className="flex-container">

                <Province_side name="Alberta" click={props.provinceclick} />
                <Province_side name="British Columbia" click={props.provinceclick} />
                <Province_side name="Manitoba" click={props.provinceclick} />
                <Province_side name="New Brunswick" click={props.provinceclick} />
                <Province_side name="Newfoundland & Labrador" click={props.provinceclick} />
                <Province_side name="Nova Scotia" click={props.provinceclick} />
                <Province_side name="Ontario" click={props.provinceclick} />
                <Province_side name="Prince Edward Island" click={props.provinceclick} />
                <Province_side name="Quebec" click={props.provinceclick} />
                <Province_side name="Saskatchewan" click={props.provinceclick} />

        </div>
    </nav>
    );
};

export default sideDrawer;