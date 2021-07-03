import React from 'react'

function Nav() {
    return(
        <nav>
            <div><h1>Code Challenger</h1></div>
            <div className="nav-content">
                <label className="switch">
                    <input type="checkbox"></input>
                    <span className={`slider round`}></span>
                </label>
                <button>Login</button>

            </div>

        </nav>
    )
}

export default Nav