import "./Logo.css";

export default function Logo(props) {
  return (
    <div className="logo titillium-web-semibold">
      {props.title}
      <i
        className="em em-bird"
        aria-role="presentation"
        aria-label="BIRD"
        style={{ fontSize: "0.5em" }}
      ></i>
    </div>
  );
}
