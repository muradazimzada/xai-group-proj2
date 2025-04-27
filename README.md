# Bike Rental Prototype

This project consists of:
- A **frontend** built with **Vite.js (React)**.
- A **backend API** built with **Python (Flask)**.

---

## Setup Instructions

### 1. Backend (Python API)

- Navigate to the `api/` folder:

```bash
cd api
```

- Install required Python packages:

```bash
pip install -r requirements.txt
```

- Run the backend server:

```bash
python main.py
```

Backend will run at:

```
http://localhost:5000
```

---

### 2. Frontend (Vite.js App)

- Navigate to the project root:

```bash
cd ..
```

- Install frontend dependencies:

```bash
npm install
```

- Start the Vite development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## Project Structure

```
bike_rental_prototype/
│
├── api/                # Python Flask backend
│   ├── model/          # Model files
│   ├── main.py         # API main script
│   ├── requirements.txt
│   └── results.json
│
├── src/                # React frontend
│   ├── pages/
│   ├── components/
│   └── contexts/
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
```

---

## Notes

- Backend runs on port **5000**.
- Frontend runs on port **5173**.
- Frontend communicates with the backend API.

