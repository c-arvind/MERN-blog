import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://i.imgur.com/HKHi8sW.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://i.imgur.com/5yxc0bB.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://i.imgur.com/cHOmkzs.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://i.imgur.com/wcqaVbc.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://i.imgur.com/lawG1Xn.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}
