import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">orewa</span>
        <span className="headerTitleLg">BBLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://i.imgur.com/FnB5yzZ.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
