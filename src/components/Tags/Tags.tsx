import { SetStateAction, useState } from 'react';

import { SelectOptionProps } from '../../types/types.common';
import Button from '../Button';
import Input from '../Input';
import { Row } from '../VehicleForms/subComponents/styles';

import TagItem from './TagItem';

type TagsProps = {
    tags: SelectOptionProps[],
    addTags: React.Dispatch<SetStateAction<SelectOptionProps[]>>
}
export default function Tags({ addTags, tags }: TagsProps) {
  const [ addTagIsOpen, setAddTagIsOpen ] = useState(false);

  const handleAdd = (tagText: string) => {
    addTags([ ...tags, { label: tagText, value: tagText.toLowerCase() } ]);
    setAddTagIsOpen(false);
  };
  const handleDelete = (tagValue: SelectOptionProps) => {
    addTags(tags.filter(tag => tag.value !== tagValue.value));
  };
  return (
    <>
      {addTagIsOpen && <Input handleClick={handleAdd} icon='plus'/>}
      <Row>

        <Button label='+ Adicionar' variant='text' onClick={() => setAddTagIsOpen(true)}/>
        {
          tags.map(tag => <TagItem key={tag.value} onDelete={() => handleDelete(tag)}>{tag.label}</TagItem>)
        }
      </Row>
    </>
  );
}