import { Button, Modal } from 'antd';


const ModalDetail = ({ children, handleCancel, handleOk, isModalVisible }) => {
    return (
        <>
            <Modal title="Detail Pokemon" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default ModalDetail;