export function getPostData(id) {
  const postOne = {
    title: 'One',
    id: 1,
    date: '4/12/22',
  };
  const postTwo = {
    title: 'Two',
    id: 2,
    date: '4/12/22',
  };
  if (id == 'one') {
    return postOne;
  } else if (id == 'two') {
    return postTwo;
  }
}

export function getAllPostIds() {
  return [
    {
      params: {
        id: 'one',
      },
    },
    {
      params: {
        id: 'two',
      },
    },
  ];
}
