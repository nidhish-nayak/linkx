import "./rightbar.scss";

const Rightbar = () => {
	return (
		<div className="rightbar">
			<div className="container">
				<div className="item">
					<span>Suggestions For You</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<span>Jane Doe</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<span>Jane Doe</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
				</div>
				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<p>
								<span>Jane Doe</span> changed their cover
								picture
							</p>
						</div>
						<span className="user-time">1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<p>
								<span>Jane Doe</span> changed their cover
								picture
							</p>
						</div>
						<span className="user-time">1 min ago</span>
					</div>
				</div>
				<div className="item">
					<span>Online Friends</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<div className="online" />
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<div className="online" />
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<div className="online" />
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<div className="online" />
							<span>Jane Doe</span>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="user-image"
							/>
							<div className="online" />
							<span>Jane Doe</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rightbar;
