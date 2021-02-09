# MERNH_BERoutingDisplay

You will Need:
1. Download axios on frontend
2. Set up proxy in package.json in frontend folder
Ex: 
 "proxy": "http://localhost:5000",

3. Import useState & useEffect from react on HomeScreen
4. Set up UseState & useEffect


Notes
- You need useState to set the value of products
- You need useEffect to change the screen if any of the Dependencies changes
- Having a blank Dependencies (i.e '[]') will invoke useEffect if page loads
- If [] has Dependencies, ex: [test] ...then if test component changes then useEffect is invoked again
