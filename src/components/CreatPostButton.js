import React from 'react';
import { Modal, Button, message } from 'antd';
import $ from 'jquery';
import { WrappedCreatePostForm } from './CreateButtonForm';
import { API_ROOT, POS_KEY, AUTH_PREFIX, TOKEN_KEY } from '../constants';

export class CreatePostButton extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                const {lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
                const formData = new FormData();
                formData.set('lat', lat + Math.random() * 0.1 - 0.05);
                formData.set('lon', lon + Math.random() * 0.1 - 0.05);
                formData.set('message', values.message);
                formData.set('image', values.image[0]);

                this.setState({confirmLoading: true});
                $.ajax({
                    url: `${API_ROOT}/post`,
                    method: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'text',
                    headers: {
                        Authorization: `${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`,
                    },
                }).then((response) => {
                message.success('created a post successfully.');
                this.form.resetFields();
                this.setState({ visible: false, confirmLoading: false });
                }, (error) => {
                    message.error(error.responseText);
                    this.form.resetFields();
                }).then(() => {
                    this.props.loadNearbyPosts().then(() => {
                        this.setState({ visible: false, confirmLoading: false });
                    });
                }).catch((error) => {
                    message.error('create post failed');
                    console.log(error);
                });
            }
        });

        // setTimeout(() => {
        //     this.setState({
        //         visible: false,
        //         confirmLoading: false,
        //     });
        // }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        const { visible, confirmLoading } = this.state;
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
                    <WrappedCreatePostForm ref={this.saveFormRef}/>
                </Modal>
            </div>
        );
    }
}