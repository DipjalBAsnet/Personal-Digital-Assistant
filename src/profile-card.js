function ProfileCard({ title, handle, myImage }) {
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is{handle}</div>
      <img src={myImage} alt="logo" />
    </div>
  );
}
export default ProfileCard;
