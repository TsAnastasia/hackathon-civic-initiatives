import { FC, useState } from "react";
import { InitiativeFile } from "../../../../types/initiative";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";
import Modal from "../../../../components/Modal/Modal";
import scss from "./initaitveDataFiles.module.scss";

const InitiativeDataFiles: FC<{ files: InitiativeFile[] }> = ({ files }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  const handleClose = () => setOpened(false);

  return (
    <div className={scss.root}>
      <IconButton onClick={handleOpen} className={scss.button} />

      <Modal isOpen={opened} onClose={handleClose} className={scss.modal}>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </Modal>
    </div>
  );
};

export default InitiativeDataFiles;
