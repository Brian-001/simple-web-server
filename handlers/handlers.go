package handlers

import (
	"fmt"
	"log"
	"net/http"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Handling /hello request")
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"message": "Hello, Developer"}`)
}

func RootHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Handling / request")
	http.ServeFile(w, r, "static/index.html")
}