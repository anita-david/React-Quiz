
# 🧠 React Quiz App

A responsive and interactive quiz application built with React. Users can test their knowledge with multiple-choice questions, track their scores, and race against the clock.

Live Demo 👉 [https://anita-react-quiz.vercel.app](https://anita-react-quiz.vercel.app)  
API Hosted On 👉 [https://react-quiz-api-l6xo.onrender.com/questions](https://react-quiz-api-l6xo.onrender.com/questions)

---

## 🚀 Features

- ⏱ **Timed Quizzes** – Users must answer each question before the countdown ends.
- ✅ **Answer Validation** – Get instant feedback on correct or incorrect answers.
- 📊 **Progress Tracking** – Progress bar reflects how far you’ve gone.
- 🧮 **Scoring System** – Points are calculated based on correct answers.
- 🏁 **Final Results Summary** – See your total score and high score at the end.
- 📱 **Responsive Design** – Looks great on desktop, tablet, and mobile.
- ♿ **Accessible UX** – Keyboard-friendly navigation and color contrast considered.

---

## 🛠 Tech Stack

| Tech           | Purpose                      |
|----------------|------------------------------|
| React 18+      | Component-based UI           |
| Vite           | Blazing fast dev environment |
| JavaScript     | App logic                    |
| CSS3           | Styling and responsiveness   |
| json-server    | Local API for development    |

---



---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/anita-david/react-quiz-app.git
cd react-quiz-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Local Mock API

Make sure you have `json-server` installed globally or as a dependency:

```bash
npx json-server --watch data/questions.json --port 8000
```

### 4. Start the React App

```bash
npm run dev
```

The app should be running at [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

- **Frontend**: Deployed with **Vercel**
- **Mock API**: Deployed using **Render**
- Ensure your frontend fetches from the **production API URL** like so:

```js
fetch("https://react-quiz-api-l6xo.onrender.com/questions")
```

---

## 🤖 Scripts

| Command          | Purpose                   |
|------------------|---------------------------|
| `npm run dev`    | Start dev server          |
| `npm run build`  | Build for production      |
| `npm run preview`| Preview prod build locally|

---

## 🧪 Future Improvements

- Add category or difficulty filters
- Store highscore in `localStorage`
- Add animations and transitions
- Implement user authentication and persistent quiz history

---

## 🙋🏽‍♀️ Contributing

Pull requests are welcome! If you have suggestions or feature ideas, feel free to fork the repo and open a PR.

---

