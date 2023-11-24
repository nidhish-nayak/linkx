import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<div className="left-heading">
						<h1>LinkX.</h1>
						<p>
							Welcome to our vibrant social media community, where meaningful
							connections thrive! Immerse yourself in a world of shared
							experiences, as our platform seamlessly brings together like
							minded individuals. Join us on a journey of authentic expression
							and community engagement.
						</p>
					</div>
					<div className="left-register">
						<span>Don't have an account ?</span>
						<button>Register</button>
					</div>
				</div>
				<div className="right">
					<div>
						<h2>Already have an account ?</h2>
						<p>Sign in with your email and password</p>
					</div>
					<form action="">
						<input type="text" placeholder="Username:" />
						<input type="password" placeholder="Password:" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
