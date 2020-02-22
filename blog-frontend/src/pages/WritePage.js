import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import Tagbox from '../components/write/Tagbox';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePage=()=>{
    return (
        <Responsive>
            <Editor></Editor>
            <Tagbox></Tagbox>
            <WriteActionButtons></WriteActionButtons>
        </Responsive>
    );
};
export default WritePage;