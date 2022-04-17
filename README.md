Exercise created with public GitHub API info

Code is added to git repo at https://github.com/ChiragPanasuriya/git-user-info

I also deployed application on FireBase URL : https://chirag-api.web.app/

You can access it directly from any browser.

All the given requirements are covered in this submission.

Future work : 1.Unit test cases 2.Design correction with more material UI components 3.Any improvement as per new requirement.

Checked List :

1.I started with the reading requirement multiple times and then drew all sections on paper how data will be displayed.This helps me clear some design doubts and how to create component

2.As it was a simple one page only so I used Angular initial APP component, In case of more functionality It will be a better idea to create separate components

3.Created a service where I can call different APIs to get the Git API data. Benefit of the service is now I can use the same service in multiple components with code reusability.

4.Displayed all the user name list in the left side column. Fetch all the accounts from developer GIT API

5.On click of account, all the respective repos will be listed down in right column 1st row

6.On click of repo name, all the open pull requests will be listed down in 2nd row

7.If PR is open for more than 5 days then color red, if open for more than 2 days then color yellow and in case of less then 2 days no color.

8.Another row containing 4 evenly sized elements One, two, three and four is added at the end in next row
