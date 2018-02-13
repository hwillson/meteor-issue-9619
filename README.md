# meteor-issue-9619

Reproduction for https://github.com/meteor/meteor/issues/9619.

```
git clone https://github.com/hwillson/meteor-issue-9619.git
cd meteor-issue-9619
meteor npm i
meteor
```

Go to http://localhost:3000 and watch your server console for:

```
Exception in defer callback: Error: The Mongo server and the Meteor query disagree on how many documents match your query. Maybe it is hitting a Mongo edge case? The query is: {}
```
