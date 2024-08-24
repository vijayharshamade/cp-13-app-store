import "./index.css";

const TabItem = (props) => {
  const { tabDetails, isActiveTab, ActiveTabButton } = props;
  //console.log(isActiveTab);
  const tabButton = isActiveTab ? "active-tab-button" : "tab-button";
  const { tabId, displayText } = tabDetails;
  const onClickTabButton = () => {
    ActiveTabButton(tabId);
  };
  return (
    <>
      <li className="tab-item-container">
        <button
          className={`button ${tabButton}`}
          type="button"
          onClick={onClickTabButton}
        >
          {displayText}
        </button>
      </li>
    </>
  );
};

export default TabItem;
