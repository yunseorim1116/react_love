import React, { useRef, useState } from "react";
import styled from "styled-components";

const Modal = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ModalBody = styled.div({
  cursor: "pointer",
  position: "absolute",
  width: "300px",
  height: "500px",
  padding: "40px",
  textAlign: "center",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "10px",
  boxShadow: "0 2px 3px 0 rgba(34, 36, 38, 0.15)",
  zIndex: 1,
});

const ProfileModal = ({ closeModal }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [img, setImg] = useState("");

  const handleUploadFile = () => {
    inputRef.current.click();
  };

  const handleUploadImg = (e) => {
    const formData = new FormData();
    const fileImg = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log(reader.result);
      const url = reader.result as string;
      setImg(url);
    };

    reader.readAsDataURL(fileImg);

    formData.append("image", fileImg);
  };
  return (
    <Modal onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        모달
        <img src={img}></img>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleUploadImg}
          ref={inputRef}
        />
        <div onClick={handleUploadFile}>파일 업로드 할래여</div>
      </ModalBody>
    </Modal>
  );
};

export default ProfileModal;
