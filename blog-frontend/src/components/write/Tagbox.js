import React, { useState, useCallback } from 'react';
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
const TagItem = React.memo(({tag})=><Tag>#{tag}</Tag>);
const TagList = React.memo(({tags}) =>(
    <TagListBlock>
        {tags.map(tag =>(
            <TagItem key={tag} tag={tag}></TagItem>
        ))}
    </TagListBlock>
));
const Tagbox=()=>{
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if(!tag) return;
            if(localTags.includes(tag)) return;
            setLocalTags([...localTags, tag]);
        },
        [localTags],
    ); 
    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !== tag));
        },
        [localTags],
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