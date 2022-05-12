import cl from "classnames";
import { FC, memo, useState } from "react";
import scss from "./initiativeDataLike.module.scss";

const InitiativeDataLike: FC<{ count: number; active: boolean }> = ({
  count,
  active,
}) => {
  const [likes, setLikes] = useState(count);
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    if (isActive) {
      // API: delete like
      setLikes((state) => state - 1);
    } else {
      // API: add like
      setLikes((state) => state + 1);
    }
    setIsActive((state) => !state);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cl(scss.root, isActive && scss.active)}
    >
      {likes}
    </button>
  );
};

export default memo(InitiativeDataLike);
