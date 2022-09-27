<h1 align="center"> Schedule 📅</h1>

View your schedule *v1.0.0* 💾.

# How To Use 🖱️

 - [x] **1.** Open [**Web App** 🚀](https://alexandr-stark.github.io/Schedule/)
 - [x] **2.** Choose your **Group 📒**
 - [x] **3.** Choose **Week(s)** and **Day**  📅

>**Note**: *Colored lines* in the right position from the lesson, indicate ***Type of Lesson***: 
><p>🟩 - practical<br>
>🟨 - seminar</p>

Congratulations, now you are in the know 🎉. But if you want to expand your schedule for your group or any other else, time to become a contributor to this repo 😻.

# How To Contribute ⚙️

### Start Application
 - [x] **1.** `Node.js` **>=** `16`
 - [x] **2.** In the project directory, you can run:
```sh
npm i
npm run start
```
 ---
 
### Git Flow
 - [x] **1.** Switch to the `main` branch: 
   `git checkout main`
 
 - [x] **2.** Create new branch:
  
 - **Branch naming**: `feature/{PROJECTPREFIX}-{group-number}_{short-description}`
 - **Example**: `feature/SDL-441-1_add-schedule`
 
  `git checkout -b feature/{PROJECTPREFIX}-{group-number}_{short-description}`
  
 - [x] **3.** Commit and Push:
> **Note**: Before this step please read next paragraph **[Add New Schedule for Group](#add-new-schedule-for-group)**

 - **Commit naming**: `{PROJECTPREFIX}-{group-number} short description`
 - **Example**: `SDL-441-1 add schedule`

 ```sh
git add src/constants/schedule.js
git commit -m "SDL-441-1 add schedule"
git push origin feature/SDL-441-1_add-schedule
```

 - [x] **4**. Create Pull Request:
   - Create pull request https://github.com/Alexandr-Stark/Schedule/pulls to the `main` branch. Waits for approve.
 ---

### Add New Schedule for Group

> For adding schedule to new the group go to file under the path: `src/constants/schedule.js`
>**Follows to the instruction in code**:
>
>>**1 Step** - add group if not exists:
>```sh
>// Add your group {..., group-name: {...}}
>export  const  GROUPS = {
>'443-1': { name:  '443-1' },
>'443-2': { name:  '443-2' },
>'443-3-1': { name:  '443-3-1' },
>'443-3-2': { name:  '443-3-2' },
>// Add your group here
>};
>```
>>**2 Step** - add lesson if not exists:
>```sh// Add your lesson [..., {...}]
>// Note: add unique number type 'id' (use incremental id)
>export  const  LESSONS = [
>{
>   id:  0,
>   type:  0, // 0 - seminar, 1 - practical
>   name:  'Організація наукових досліджень з основами інтелектуальної >власності',
>   tutor:  'Ушенко Ю.О.',
>   links: [
>    { ...GOOGLE_MEET, url:  '' }, // add lesson link , url: 'https://some-link'
>   { ...MOODLE, url:  '' } // add lesson link , url: 'https://some-link'
>   ],
>},
>{ ... You lesson with the same structure }
>];
>```
>>**3 Step** - add schedule if not exists:
>```sh
>// Add your schedule [..., {...}]
>export  const  SCHEDULES = [
>   {
>      id:  0,
>      groupName:  GROUPS['443-2'].name, // use your group from added 
>      GROUPS
>      { ... See comments in code... }
>   },
>   // Add your schedule here
> ];
>```
 
## Thanks 🤝
You are all done. So if you have a questions, please contact me.
