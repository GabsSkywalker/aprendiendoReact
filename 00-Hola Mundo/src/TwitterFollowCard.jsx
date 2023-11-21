import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, children ,initialIsfollowing }) {
  const [IsFollowing, setisFollowing] = useState(initialIsfollowing);
  const buttonClassName = IsFollowing
    ? "tw-followCard-buttonyes"
    : "tw-followCard-buttonno";

  const handleClick = () => {
    setisFollowing(!IsFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {IsFollowing ? "Dejar de seguir" : "Seguir"}
        </button>
      </aside>
    </article>
  );
}
