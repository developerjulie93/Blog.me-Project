import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
    return(
        <AskModal
            visible={visible}
            title='Post Delete'
            description='Do you want to delete this post?'
            confirmText='Delete'
            onCancel={onCancel}
            onConfirm={onConfirm}
        ></AskModal>
    );
};

export default AskRemoveModal;