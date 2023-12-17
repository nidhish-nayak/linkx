import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
    const { currentUser } = useContext(AuthContext);

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <div className="module-border-wrap">
                    <img src={currentUser?.profilePic} alt="user-image" />
                </div>
                <button>+</button>
            </div>
            {stories.map((story) => (
                <div className="story">
                    <div className="module-border-wrap">
                        <img src={story.img} alt="user-story" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stories;
