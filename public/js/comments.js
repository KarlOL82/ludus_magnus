var defaultComments = [
    {
        id: 1,
        title: "Yuppity Yuppers thats a Puppers",
        author: "Amiko",
        date: Date.now(),
        content: "Honestly why would we even create something functional when broken things have their own charisma",
        comments: [
            {
                author: "Andrew",
                date: Date.now(),
                content: "Awww yis you speak straight facts fam"
            },
            {
                author: "Androo",
                date: Date.now(),
                content: "This guy above me is an absolute idiot"
            }
        ]
    }
]
var comments = defaultComments
if (forumData.json && forumData.json.getItem('comments')) {
    comments = JSON.parse(forumData.json.getItem('comments'));
} else {
    comments = defaultComments;
    forumData.json.setItem('comments', JSON.stringify(defaultComments));
}