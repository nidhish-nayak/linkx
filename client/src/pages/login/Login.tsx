import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World.</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
						expedita animi ad repellat odio quisquam consequatur impedit fugit
						cum aspernatur, assumenda, harum iste aliquam hic laudantium nostrum
						libero molestias ullam?
					</p>
					<span>Don't you have an account?</span>
					<button>Register</button>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form action="">
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
