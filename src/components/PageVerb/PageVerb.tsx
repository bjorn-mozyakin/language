import React from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export const Page = () => {
  const inputData = {
    name: 'verb',
    placeholder: 'Введите глагол'
  };

  return (
    <div className="page">
      <Input {...inputData} />
      <Button>Показать</Button>
    </div>
  );
};

export default Page;
