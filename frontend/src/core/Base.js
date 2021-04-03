import React from 'react'
import Menu from './menu';

const Base = ({
    title="Home Page",
    description="",
    className="p-4 text-center",
    children
}) =>(
    <div>
        <Menu/>
        <div className="container-fluid">
            <div className="jumbotron  text-center">
                <h2 className="display-4 text-center">{title}</h2>
                <p className="lead"> {description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer mt-auto py-3">
            <div className="container-fluid">
            </div>
            <div className="container"> </div>

        </footer>
    </div>
)
export default Base;