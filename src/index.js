import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./commentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam"
                    time = "Today 4:45PM"
                    comment = "Nice blog!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author = "Alex"
                    time = "Yesterday 1:00PM"
                    comment = "Don't like it"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author = "Jane"
                    time = "Today 2:15AM"
                    comment = "wowwwwww"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));