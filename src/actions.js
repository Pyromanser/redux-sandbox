export const ink = () => ({type: "INC"});

export const dec = () => ({type: "DEC"});

export const rnd = (payload) => {
  return {
    type: "RND",
    payload
  };
};