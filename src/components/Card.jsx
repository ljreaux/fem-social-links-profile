import profile from "../assets/images/avatar-jessica.jpeg";

export default function Card() {
  const buttonInfo = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <div className="card">
      <img src={profile} alt="avatar-jessica.jpeg" />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader."</p>
      <div className="buttons">
        {buttonInfo.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
}
