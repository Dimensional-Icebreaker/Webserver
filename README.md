# Webserver

Welcome to My Digital Domain! This project is a personal website hosted on a custom-configured private Linux-Ubuntu 22.04.4 LTS server, built using a Flask web application, and served with Gunicorn, WSGI, and Nginx.

## Key Features:
- **Dynamic Content:**
  - **Weather Information:** Fetches and displays real-time weather information for Dallas using the OpenWeatherMap API.
  - **Inspirational Quotes:** Retrieves and displays random inspirational quotes from the type.fit API.

- **Typewriter Effect:**
  - Implements a typewriter effect using Typed.js to dynamically display introductory text.

- **Custom Styling:**
  - **Dark Theme:** Utilizes a clean, modern design with a dark theme for a sleek and professional appearance.
  - **Responsive Design:** Ensures the website is fully responsive and looks great on all devices, from desktops to mobile phones.

- **Form Validation:**
  - **Client-Side Validation:** Includes JavaScript-based form validation to ensure all required fields are filled and email addresses are valid before submission.

- **Server-Side Configuration:**
  - **Flask:** A lightweight WSGI web application framework in Python to build the web app.
  - **Gunicorn:** A Python WSGI HTTP Server for UNIX to serve the Flask application.
  - **Nginx:** A high-performance web server and reverse proxy server for serving static content and acting as a reverse proxy for Gunicorn.

- **Deployment:**
  - **Hosted on a Custom Server:** Hosted on a custom-configured private Linux-Ubuntu 22.04.4 LTS server for full control over the environment.
  - **Live Demo:** Access the live demo at [ribesh-joshi.com.np](http://ribesh-joshi.com.np).

## Project Structure:
- **app.py:** Main Flask application file.
- **wsgi.py:** WSGI entry point for Gunicorn.
- **static/**: Directory for static files (CSS, JavaScript, images).
- **templates/**: Directory for HTML template files.

## Important Note:
This project is structured to work within a Flask server environment with Gunicorn, WSGI, and Nginx. If you plan to host it outside of this environment, you'll need to adjust the paths for HTML templates and static files accordingly.

## How to Run:
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/webserver.git
    cd my-digital-domain
    ```

2. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3. **Configure Gunicorn and Nginx:**
    - **Gunicorn:** Run the Flask app with Gunicorn:
      ```bash
      gunicorn -w 4 wsgi:app
      ```
    - **Nginx:** Configure Nginx to serve the app (refer to the provided Nginx configuration file in the repository).

4. **Run the Application:**
    - Ensure Nginx is running and configured to proxy requests to Gunicorn.
    - Open your web browser and go to your server's domain or IP address.

## Demo:
Check out the live demo at [ribesh-joshi.com.np](http://ribesh-joshi.com.np)

Feel free to contribute or provide feedback!
