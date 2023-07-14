import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3434346e;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalWrapper = styled.form`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  color: #000000;
  font-size: 18px;
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 20px;
`;

export const ModalCategory = styled.div`
  margin-top: 20px;
`;

export const ModalLabel = styled.label`
  font-weight: 600;
  margin-top: 20px;
`;

export const ModalWriter = styled.input`
  width: 300px;
  height: 14px;
  font-size: 16px;
  padding: 7px;
`;

export const ModalTitle = styled.textarea`
  width: 580px;
  height: 23px;
  font-size: 16px;
  padding: 7px;
`;

export const ModalContents = styled.textarea`
  width: 580px;
  height: 100px;
  font-size: 16px;
  padding: 7px;
`;

export const ModalBtnBox = styled.div`
  text-align: center;
  margin: 20px 0;
`;
