import menuTree from '../menuTree';

// This function reconstructs the path through the menuTree
// that leads to a particular chunktype.
// Intended for when a user clicks to edit an existing template chunk.

const reconstructBreadcrumbs = (chunkType) => {
  const breadcrumbs = ['Root'];
  
  const helper = (key) => {
    for (let k in key) {
      if (k === chunkType) {
        breadcrumbs.push(k);
        return true;
      } else if (key[k].leaf) {
        continue;
      }
      breadcrumbs.push(k);
      if(helper(key[k])) {
        return breadcrumbs;
      }
      breadcrumbs.splice(breadcrumbs.length - 1, 1);
    }
  };

  helper(menuTree.Root);
  return breadcrumbs;
};


const templateMenu = (state = ['Root'], action) => {
  switch (action.type) {
    case 'NAVIGATE_DOWN':
      return [...state, action.key];
    case 'NAVIGATE_UP':
      return state.slice(0, state.length - 1);
    case 'NAVIGATE_OUT':
      return ['Root'];
    case 'START_AT_LEAF':
      return reconstructBreadcrumbs(action.chunkType);
    default:
      return state;
  }
};

export default templateMenu;
