import cl from "classnames";
import { FC, useEffect, useState } from "react";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";

import scss from "./docContentScale.module.scss";

const DocContentScale: FC<{
  scale: number;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}> = ({ scale, handleZoomIn, handleZoomOut }) => {
  const [isZoominDis, setIsZoominDis] = useState(false);

  useEffect(() => {
    setIsZoominDis(Math.round((scale - 0.5) * 10) === 0);
  }, [scale]);

  return (
    <div className={scss.root}>
      <span className={scss.scale} />
      <IconButton
        className={cl(scss.zoomin, scss.button)}
        onClick={handleZoomIn}
      />
      <IconButton
        className={cl(scss.zoomout, scss.button)}
        onClick={handleZoomOut}
        disabled={isZoominDis}
      />
    </div>
  );
};

export default DocContentScale;
