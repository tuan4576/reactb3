import React from 'react'

export default function Checkout() {
  return (
    <div>
     <table className="table table-bordered">
  <tbody>
    <tr><td>Check Out</td></tr>
    <tr> 
      <td>
        <form className="form-horizontal">
          <div className="control-group">
            <label className="span2 control-label">Name</label>
            <div className="controls">
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label">Address</label>
            <div className="controls">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="control-group">
            <label className="span2 control-label">Phone</label>
            <div className="controls">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="control-group"> 
            <div className="controls">
              <button type="submit" className="shopBtn">Checkout</button>
            </div>
          </div>
        </form> 
      </td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
