import "./index.css";

const AppItem = (props) => {
  const { appItemDetails } = props;
  const { appId, appName, imageUrl } = appItemDetails;
  return (
    <>
      <li className="app-item">
        <img className="app-item-image" src={imageUrl} alt={appId} />
        <p>{appName}</p>
      </li>
    </>
  );
};

export default AppItem;
