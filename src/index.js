import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 8:24PM"
          content="I like the writing"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 5:00PM"
          content="Woooo! It's so awesome"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 2:00AM"
          content="Great blog post!"
        />
      </ApprovalCard>
    </div>
  );
};


ReactDom.render(<App />, document.querySelector('#root'));