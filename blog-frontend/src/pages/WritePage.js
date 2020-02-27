import React from 'react';
import Responsive from '../components/common/Responsive';
import Tagbox from '../components/write/Tagbox';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';

const WritePage=()=>{
    return (
        <Responsive>
            <EditorContainer></EditorContainer>
            <Tagbox></Tagbox>
            <WriteActionButtons></WriteActionButtons>
        </Responsive>
    );
};
export default WritePage;