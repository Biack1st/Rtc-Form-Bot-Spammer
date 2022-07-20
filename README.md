# RTC Block appeal form bot spammer
## Introduction
So recently, I saw awexa_ok tweeting out a message they got from the official RTC roblox account saying they can appeal their block. Me being the retard I am, decided it would be a good idea to make a script to spam the form. FUCK TANOOKI

## How to setup
If you would like to setup this bot on your own in order to spam the form to multiply the damage, here's how! Keep in mind, you require administrator rights for this to properly work. This set up tutorial will be for Windows.

### Downloading needed programs
First, we need some programs in order to run the code. First, install [Visual Studio Code](https://code.visualstudio.com/)(not required but highly recommended to make the process easier) and [nodejs](https://nodejs.org/en/)(***this is required*** keep in mind you do **need administrator** access to install nodejs. There are ways to install without administrator by configuring system environment variables, but for the sake of simplicity I will not be explaining this part in this tutorial.)

### Getting needed files
First, go to the repo and select the green "Code" button and click "Download ZIP"
![image](https://user-images.githubusercontent.com/98064246/180093426-b8025505-e63a-4f25-990f-59541115c850.png)
![image](https://user-images.githubusercontent.com/98064246/180093444-ac016e05-f838-493e-a3d0-568ea268d7d1.png)

### Openning project folder
Once you download all the needed files and program, we need to open the project folder uses Visual Studio Code(VS code). 

First, open the newly download ZIP file in it's file location and right click on it and click "Extract all." This will be different for you depending on your version of Windows.

![image](https://user-images.githubusercontent.com/98064246/180094901-cc4f63d6-0398-4ddd-b607-f568a1f528b7.png)

After you extract the project folder, click on the folder inside of it.
![image](https://user-images.githubusercontent.com/98064246/180095106-377749a7-411c-4f4f-97d2-65b7f9548f2d.png)

Once you click on the inner folder, copy it's file location by clicking on the address bar and copying the path with Ctrl + C
![image](https://user-images.githubusercontent.com/98064246/180095261-7eac7aff-1538-4b9b-a79d-b6a1cd4c7145.png)
![image](https://user-images.githubusercontent.com/98064246/180095350-d1b0c666-c544-488b-97ff-8107101561be.png)

Now, open VS code(Visual Studio Code) and select File -> Open Folder and paste the path you copied earlier into the address bar and click "Select Folder."
![image](https://user-images.githubusercontent.com/98064246/180095704-0cd04cc0-84f7-439f-9b9e-e44279bb5ca7.png)
![image](https://user-images.githubusercontent.com/98064246/180095776-719b9c95-31e7-4c17-a1f6-1f21e2221b8c.png)
![image](https://user-images.githubusercontent.com/98064246/180095835-52004c2f-17fe-46d0-b6ce-7460de1736e1.png)
![image](https://user-images.githubusercontent.com/98064246/180095872-9aa6d3fc-e5f6-4d9d-acc4-6bd2ef709f94.png)

Almost done hang in there! Next, at the top click on "Terminal" and "New Terminal."
![image](https://user-images.githubusercontent.com/98064246/180096015-a249c400-2205-4953-b913-eed14c5fb4a6.png)
![image](https://user-images.githubusercontent.com/98064246/180096051-a1ef3e94-3e64-43ff-90a9-d9aebd8c89e8.png)

Once you open the terminal, type the following commands in order:
```
npm init -y
```
```
npm i node-fetch@2.6.1
```

If you get an error saying that "npm" doesn't exsist then simply download nodejs, as npm comes with nodejs. If you already downloaded it, restart your terminal or just simply reinstall nodejs. 

Next, type the following into the terminal:
```
node src/index.js
```

And there you go, you now have just started the bot! Thanks for helping us on our way to get revenge on Alex for all the terrible shit she's done. If you need any help with anything feel free to DM me on Twitter @Biack1st. My DMs are always open!


