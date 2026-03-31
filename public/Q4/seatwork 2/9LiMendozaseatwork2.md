Seatwork #2 - Getting to know CSS Position and z-index.
This seatwork will ask you to implement the different CSS position on a given code.
short link to this .md file is: https://bit.ly/4c61P9K
Resources (also found in Khub week 5)
4 Minute Youtube Video on CSS Position
CSS Position Tutorial
Instructions:
This is individual submission in khub, but you can work with a partner. When you submit in khub please place both your names in the submission bin.

Guided Activity (30 minutes), please follow what is being required.

Make a copy of this .md file to your Q4 repository and name it as SectionLNseatwork2.md example 9LiCruzSeatwork2.md. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.
Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved.
Change the content values of the meta tags to your names for author/s and the date today for revised.
Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well. - This seatwork is worth 20pts and should be submitted by the end of the period The link to KHub submission bin.
Submit the links to your .md file and .html file.
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
Step 1 (Static vs Relative):
Add in css position: relative; top: 20px; left: 20px; to .sidebar.

Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
  - When you add values to top, bottom, left, or right when it is in the default static positioning it doesn't do anything and keeps it position no matter the value you give. However, when you then change the position to relative, the values you gave actually start to work and move, you add top: 20px, then it will give the top a margin of 20px.

Step 2 (Fixed):
Add in css position: fixed; bottom: 0; width: 100%; to .footer.

Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
  - When you scroll the page, elements with position relative will move whenever to scroll because it is stuck with the position you give it for example you give an element relative position and its top and left 20px, when you scroll the element will stay at the top left with 20px margin on the top and left side, when you scroll down it will disappear. On the other hand, when you give an element a fixed position it will stay on the *screen*. No matter where you scroll it will stay fixed to wherever you put it, for example if after you give it a fixed position you put bottom: 0; it will stay fixed to the botoom, but if you give it top: 0; then it will stay fixed to the top. We gave fixed position to the footer which is why it stays at the bottom fixed unlike position relative where it stays put in a certain area only on a *page*.

Step 3 (Absolute):
Add in css position: absolute; top: 66px; left: 200px; to .content.

Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
  - Position absolute moves an element relative to the body in this case. It moves depending on the top, bottom, left, and right values that you give to it. Just like relative positioning, it stays put on an area of the page that you assign to it but it is not fixed on a certain part of a screen unlike fixed positioning. 

Step 4 : (Absolute)
Add in html <div class="notice">Notice!</div> and include the css below:
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
Give .content a z-index: 1.

Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
  - The notice appears on top of the content because z-index is for the stacking order of elements. If we swap the index values, the content will stack on top of the notice.

Challenge:

What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
  - I will put the html of notice inside content since absolute positon positions and element relative to what element it is inside of. Then I will adjust change the value of top to O, delete left, then add right: 0px. :
  .content {
    background: lightyellow;
    width: 300px;
    height: 200px;
    position: absolute; 
    top: 66px; 
    left: 200px;
    z-index: 1;
  }    
  .notice {
    position: absolute;
    top: 0;
    right: 0px;
    background: orange;
    padding: 10px;
    z-index: 2;
  }
  <div class="content">Main Content
    <div class="notice">Notice!</div>
  </div>

Try to change the position of .content to relative then to fixed. What do you observed each time?
  - When I change it to fixed, the notice that I put inside of it is also fixed since it is inside concent.

What do you observe on about the effect of z-index on .notice and .content boxes?
  - It affects it by changing its stacking position.

Please answer the following reflection questions (15 minutes)

a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?
  - static: it is positioned based of its position in the html file, its normal position.
  - relative: it is postioned based on the values you give its top, bottom, left and right, relative to its static position or original position on the page.
  - absolute: it is positioned relative to an element it is within or if theres none then it is position relative to the <body>.
  - fixed: it is fixed on the SCREEN and stays on the screen even if you scroll.

b. How does absolute positioning depend on its parent element?
  - It positions an element with absolute positioning relative to its parent element.

c. How do you differentiate sticky from fixed (you can research on sticky)?
  - Fixed stays in one spot on the screen no matter what, while sticky moves with the page until it hits a specific point and then "sticks" to the top of its box.

d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
  - For a school event page, I would use static for the main body text so it flows naturally on the page, but I’d use relative to slightly nudge a "New!" icon away from its original position next to a specific activity. I could then use absolute to pin a "Sold Out" badge to the exact corner of an event's image, and I would use fixed to keep the "Buy Tickets" button stuck to the screen so users can always see it while they scroll.