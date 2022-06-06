import { FC, useState } from "react";
import { InitiativeFile } from "../../../../types/initiative";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";
import Modal from "../../../../components/Modal/Modal";
import scss from "./initaitveDataFiles.module.scss";
import InitiativeDataFilesItem from "./item/InitiativeDataFilesItem";

const InitiativeDataFiles: FC<{ files: InitiativeFile[] }> = ({ files }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  const handleClose = () => setOpened(false);

  return (
    <div className={scss.root}>
      <IconButton onClick={handleOpen} className={scss.button} />

      <Modal
        isOpen={opened}
        onClose={handleClose}
        className={scss.modal}
        hasCloseIcon
      >
        {files.length > 0 ? (
          <ul className={scss.content}>
            {files.map((file) => (
              <InitiativeDataFilesItem key={file.name} file={file} />
            ))}
          </ul>
        ) : (
          <div className={scss.content}>
            <p className={scss.message}>Файлов нет</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InitiativeDataFiles;
