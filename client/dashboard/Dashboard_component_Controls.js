import React from 'react';
import AddButton from '../templateMenu/TemplateMenu_component_AddButton';

const DashboardControls = ({
  page,
  tweets,
  incrementPage,
  decrementPage,
  resetPage,
  refreshTweets
}) => {
  return (
    <div style={{marginTop: '1rem'}}>
      <AddButton icon={'back'} onClick={() => { decrementPage(); refreshTweets(page - 1); }} disabled={page === 0} />
      <AddButton icon={'refresh'} onClick={() => { resetPage(); refreshTweets(0); }} />
      <AddButton icon={'forward'} onClick={() => { incrementPage(); refreshTweets(page + 1); }} disabled={tweets && tweets.length < 5}/>
    </div>
  )
};

export default DashboardControls;
