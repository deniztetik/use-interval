# use-local-storage
A React Hook for using local storage and keeping it in sync with your app

## Installation Instructions

 `yarn add @aslan-hooks/use-local-storage` 
 
 or 
 
 `npm i --save @aslan-hooks/use-local-storage`

## Usage Instructions 

```jsx
import React from 'react';

import useLocalStorage from '@aslan-hooks/use-local-storage';

const Component = () => {
  const [text, setText] = useLocalStorage('initialValue');

  return (
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
  )
};
```
