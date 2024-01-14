export default function Login() {
    return(
        <div className="col-lg-6">
            <div className="customer-login text-left">
                <h4 className="title-1 title-border text-uppercase mb-30">Registered customers</h4>
                <p className="text-gray">If you have an account with us, Please login!</p>
                <input type="text" placeholder="Email here..." name="email" />
                <input type="password" placeholder="Password" />
                <p><a href="#" className="text-gray">Forget your password?</a></p>
                <button type="submit" data-text="login" className="button-one submit-button mt-15">login</button>
            </div>					
        </div>
    )
}