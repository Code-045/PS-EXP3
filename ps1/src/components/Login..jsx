   
   
   import { RiAdminFill } from "react-icons/ri";

import "./Login.css"
export const Login=()=>{
    return(
        <>

        <section className="login-box">
        <div className="icon">
        <RiAdminFill />
        </div>
          <form method="Post">
        <label htmlFor="username"></label>
        <input type="text" name="username" placeholder="Enter the username" />
        <label htmlFor="password "></label>
        <input type="password" name="password" placeholder="Enter the Password"/>
        <button>Submit</button>
      </form>
      </section>







        
        
        
        
        </>
    )
}