import cl from "classnames";
import { FC, useCallback, useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import AppButton from "../../../../components/UI/buttons/AppButton/AppButton";
import { Initiative } from "../../../../types/initiative";
import scss from "./initiativeDataImages.module.scss";

const InitiativeDataImages: FC<{ initiative: Initiative }> = ({
  initiative,
}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedIndex, setSetectedIndex] = useState<number | null>(null);

  const handleModalOpen = useCallback((index: number) => {
    setModalOpened(true);
    setSetectedIndex(index);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpened(false);
  }, []);

  const handleNextClick = useCallback(() => {
    setSetectedIndex((state) =>
      state === null || state === initiative.images.length - 1 ? 0 : state + 1
    );
  }, [initiative]);

  const handlePrevClick = useCallback(() => {
    setSetectedIndex((state) =>
      state === null || state === 0 ? initiative.images.length - 1 : state - 1
    );
  }, [initiative]);

  return (
    <>
      {initiative.images.length > 0 ? (
        <>
          <ul className={scss.list}>
            {initiative.images.map((image, index) => (
              <li key={image}>
                <img
                  src={image}
                  alt={initiative.title}
                  className={scss.image}
                  onClick={() => handleModalOpen(index)}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={cl(scss.button, scss.prev, modalOpened && scss.open)}
            onClick={handlePrevClick}
          />
          <Modal
            isOpen={modalOpened}
            onClose={handleModalClose}
            className={scss.modal}
            position="center"
          >
            {selectedIndex !== null && (
              <img
                src={initiative.images[selectedIndex]}
                alt={initiative.title}
                className={scss.image}
              />
            )}
            <AppButton onClick={handleModalClose} className={scss.close}>
              Закрыть
            </AppButton>
          </Modal>
          <button
            type="button"
            className={cl(scss.button, scss.next, modalOpened && scss.open)}
            onClick={handleNextClick}
          />
        </>
      ) : (
        <div>
          <p className={scss.message}>Нет изображений</p>
        </div>
      )}
    </>
  );
};

export default InitiativeDataImages;
