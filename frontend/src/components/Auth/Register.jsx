export default function Register() {
    return(
        <div className="col-lg-6">
            <div className="customer-login text-left">
                <h4 className="title-1 title-border text-uppercase mb-30">new customers</h4>
                <p className="text-gray">If you have an account with us, Please login!</p>
                <input type="text" placeholder="Your name here..." name="name"/>
                <input type="text" placeholder="Email address here..." name="email"/>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password"/>
                <p className="mb-0">
                    <input type="checkbox" id="newsletter" name="newsletter"  />
                    <label htmlFor="newsletter"><span>Sign up for our newsletter!</span></label>
                </p>
                <button type="submit" data-text="regiter" className="button-one submit-button mt-15">regiter</button>
            </div>					
        </div>
    )
}