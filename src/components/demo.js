
function Demo() {
  
  return (
    <div className="App">
    <div className="container p-5">
        
         
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         User Login
         </button>
        
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">Login Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form>
                  <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                     <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
               </form>
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
         </div>
      
    </div>
  );
}
export default Demo;