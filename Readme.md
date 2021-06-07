1. How do you see the files changed within each commit from git log?
git log -p  (answred by RANA AHMED)
Answer: By using flag "git log --stat", it will listed out all the files that were involved in each 
commits.
We can see their paths, and also the relative changes listed out with plus and minus sign, during any
additions and subtractions of content per commit.

2. How do you see the contents of what changed within each file from the git log? 

Answer: By using flag "git log --patch", it will shows the difference between each of the subsequent 
commits, i.e. if we change some content by adding between two commits, then we will see lit up in 
green colour following the green plus sign, but if we remove something, then we will see red colour 
lit uo along with minus sign on the left. 
 
3. What does HEAD refer to in the context of git? 

Answer: HEAD is the reference to the current branch, so, this is how git knows about at what branch 
we are currently working on.
