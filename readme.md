# Simple Go Web Server with client-Side Navigation
This project is a lightweight Go Web server that serves static HTML pages(`index.html, about.html, contact.html`) and a JSON endpoint (`/hello`). 

It features client-side navigation using JavaScript to load content dynamically without full page reloads and updates the browser's URL using the History API.

## Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/Brian-001/simple-web-server.git
cd simple-web-server
```
2. Initialize Go Module (If not present)

```bash
go mod init simple-web-server
go mod tidy
```

3. Run the server

```bash
go run main.go
```

The server starts on `https://localhost:8080`

4. Access the Application

<ul>
    <li>Open http://localhost:8080 in a browser to view the home page.</li>
    <li>Use navigation links(Home, About, Contact, Hello(JSON)) to switch pages without reloading</li>
    <li>Test the JSON endpoint</li>
</ul>

```bash
curl http://localhost:8080/hello
```
Output `{"message": "Hello, Developer"}`



## Concepts Learned
This project covers key web development concepts, implemented in Go and JavaScript.

### Go Web Development
>`HTTP Server Setup`: Using `net/http` to create a web server with `http.ListenAndServe` in `main.go`.

>`Route Handling`: Registering routes with `http.HandleFunc` for route and JSON endpoint

>`Static File Serving`: Using `http.FileServer` and `http.StripPrefix` to serve files from the `Static` directory under `/static/`

>`Modular Code Organization`: Separating route handlers into a `handlers` package for maintainability.

>`Error Handling`: Logging server startup and request errors with `log` package.

>`Dynamic File Serving`: Serving new static files without server restarts using `http.FileServer`