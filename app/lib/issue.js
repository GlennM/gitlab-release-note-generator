// [
//     {
//         "project_id" : 4,
//         "milestone" : {
//             "due_date" : null,
//             "project_id" : 4,
//             "state" : "closed",
//             "description" : "Rerum est voluptatem provident consequuntur molestias similique ipsum dolor.",
//             "iid" : 3,
//             "id" : 11,
//             "title" : "v3.0",
//             "created_at" : "2016-01-04T15:31:39.788Z",
//             "updated_at" : "2016-01-04T15:31:39.788Z"
//         },
//         "author" : {
//             "state" : "active",
//             "web_url" : "https://gitlab.example.com/root",
//             "avatar_url" : null,
//             "username" : "root",
//             "id" : 1,
//             "name" : "Administrator"
//         },
//         "description" : "Omnis vero earum sunt corporis dolor et placeat.",
//         "state" : "closed",
//         "iid" : 1,
//         "assignees" : [{
//             "avatar_url" : null,
//             "web_url" : "https://gitlab.example.com/lennie",
//             "state" : "active",
//             "username" : "lennie",
//             "id" : 9,
//             "name" : "Dr. Luella Kovacek"
//         }],
//         "assignee" : {
//             "avatar_url" : null,
//             "web_url" : "https://gitlab.example.com/lennie",
//             "state" : "active",
//             "username" : "lennie",
//             "id" : 9,
//             "name" : "Dr. Luella Kovacek"
//         },
//         "labels" : ["foo", "bar"],
//         "upvotes": 4,
//         "downvotes": 0,
//         "merge_requests_count": 0,
//         "id" : 41,
//         "title" : "Ut commodi ullam eos dolores perferendis nihil sunt.",
//         "updated_at" : "2016-01-04T15:31:46.176Z",
//         "created_at" : "2016-01-04T15:31:46.176Z",
//         "closed_at" : "2016-01-05T15:31:46.176Z",
//         "closed_by" : {
//             "state" : "active",
//             "web_url" : "https://gitlab.example.com/root",
//             "avatar_url" : null,
//             "username" : "root",
//             "id" : 1,
//             "name" : "Administrator"
//         },
//         "user_notes_count": 1,
//         "due_date": "2016-07-22",
//         "web_url": "http://example.com/example/example/issues/1",
//         "weight": null,
//         "time_stats": {
//             "time_estimate": 0,
//             "total_time_spent": 0,
//             "human_time_estimate": null,
//             "human_total_time_spent": null
//         },
//         "has_tasks": true,
//         "task_status": "10 of 15 tasks completed",
//         "confidential": false,
//         "discussion_locked": false,
//         "_links":{
//             "self":"http://example.com/api/v4/projects/4/issues/41",
//             "notes":"`http://example.com/`api/v4/projects/4/issues/41/notes",
//             "award_emoji":"http://example.com/api/v4/projects/4/issues/41/award_emoji",
//             "project":"http://example.com/api/v4/projects/4"
//         },
//         "subscribed": false
//     }
// ]
const _ = require("lodash");

const Gitlab = require("../adapters/gitlab");

exports.searchIssuesByProjectIdStateStartDateAndEndDate = async (projectId, state, startDate, endDate) => {
  return Gitlab.searchIssuesByProjectId(projectId, {state, updatedBefore: startDate, updatedAfter: endDate})
};

exports.formatIssue = (issue) => {
  return `${issue.title} ![#${issue.iid}](${issue.web_url})`;
};