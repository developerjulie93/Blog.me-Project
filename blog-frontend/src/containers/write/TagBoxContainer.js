import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';
import Tagbox from '../../components/write/Tagbox';

const TagboxContainer=()=>{
    const dispatch = useDispatch();
    const tags = useSelector(state => state.write.tags);

    const onChangeTags = nextTags => {
        dispatch(
            changeField({
                key: 'tags',
                value: nextTags,
            }),
        );
    };

    return <Tagbox onChangeTags={onChangeTags} tags={tags}></Tagbox>
};
export default TagboxContainer;