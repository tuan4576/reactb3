import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar">
  <div className="navbar-inner">
    <div className="container">
      <a data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="nav-collapse">
        <ul className="nav">
          <li className="active"><a href="index.html">Home	</a></li>
          <li className><a href="list-view.html">List View</a></li>
          <li className><a href="grid-view.html">Grid View</a></li>
          <li className><a href="three-col.html">Three Column</a></li>
          <li className><a href="four-col.html">Four Column</a></li>
          <li className><a href="general.html">General Content</a></li>
        </ul>
        <form action="#" className="navbar-search pull-left">
          <input type="text" placeholder="Search" className="search-query span2" />
        </form>
        <ul className="nav pull-right">
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#"><span className="icon-lock" /> Login <b className="caret" /></a>
            <div className="dropdown-menu">
              <form className="form-horizontal loginFrm">
                <div className="control-group">
                  <input type="text" className="span2" id="inputEmail" placeholder="Email" />
                </div>
                <div className="control-group">
                  <input type="password" className="span2" id="inputPassword" placeholder="Password" />
                </div>
                <div className="control-group">
                  <label className="checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="submit" className="shopBtn btn-block">Sign in</button>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}
