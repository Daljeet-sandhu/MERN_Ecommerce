import React from 'react';
import classes from './FooterBottom.module.scss'

const FooterBottom = () => {
    return (
        <div className={classes.footer}>
            <div style={{margin: '2px auto', display: 'flex'}} className='container'>
                <p>© 2025 Ecommerce by Daljeet Singh Sandhu.</p>
            </div>
        </div>
    );
};

export default FooterBottom;