import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4{
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 300px;
  border: 1px solid ${palette.gray[9]}; 
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

//Using React.memo, rerendering when tag changed
const TagItem = React.memo(({tag}) => <Tag>#{tag}</Tag>);
const TagList = React.memo(({tags}) =>(
    <TagListBlock>
        {tags.map(tag =>(
            <TagItem key={tag} tag={tag}></TagItem>
        ))}
    </TagListBlock>
));
const Tagbox=({onChangeTags, tags})=>{
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);
    //렌더링 성능을 최적화할때 사용, 함수 재사용 할 때 사용(useMemo와 다른점)
    //두번째 파라미터 값이 변할때마다 새로 렌더링
    const insertTag = useCallback(
        tag => {
            if(!tag) return;
            if(localTags.includes(tag)) return;
            const nextTags = [...localTags, tag];
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags,onChangeTags],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t!==tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );
        const onChange = useCallback(e=>{
        setInput(e.target.value);
    },[]); 
    
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    ); 
    //tag 값이 바뀔때마다 새로 렌더링
    useEffect(()=>{
        setLocalTags(tags);
    }, [tags]);

    return(
        <TagBoxBlock>
            <h4>Tag</h4>
            <TagForm onSubmit={onSubmit}>
                <input 
                    placeholder='#'
                    value={input}
                    onChange={onChange} />
                <button type='submit'>Add</button>
            </TagForm>
            <TagList onRemove={onRemove} tags={localTags}></TagList>
        </TagBoxBlock>
    );
};
export default Tagbox;