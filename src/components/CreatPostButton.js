import React from 'react';
import { Modal, Button } from 'antd';
import { WrappedCreatePostForm } from './CreateButtonForm';

export class CreatPostButton extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Create Post Button</Button>
                <Modal title="Create New Post"
                       visible={visible}
                       onOk={this.handleOk}
                       onText="Create"
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                       cancelText={"Cancel"}
                >
                    <WrappedCreatePostForm></WrappedCreatePostForm>
                </Modal>
            </div>
        );
    }
}