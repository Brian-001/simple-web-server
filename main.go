package main

import (
	"log"
	"net/http"
	"simple-web-server/handlers"
)

func main() {
	// Register handlers for routes
	http.HandleFunc("/hello", handlers.HelloHandler)
	http.HandleFunc("/", handlers.RootHandler)

	// Serve static files from the "static" directory under "/static/"
	// fs := http.FileServer(http.Dir("static"))
	// http.Handle("/static/", http.StripPrefix("/static/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	// 	log.Printf("Serving static file: %s", r.URL.Path)
	// 	fs.ServeHTTP(w, r)
	// })))
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Start the server on port 8080
	log.Println("Starting server on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Server failed to start:", err)
	}
}