document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default link behavior (full page reload)
            event.preventDefault();

            // Get the URL from the link's href
            const url = link.getAttribute('href');

            // Fetch the content
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    // Check if the response is JSON (for /hello) or HTML
                    const contentType = response.headers.get('content-type');
                    if (contentType.includes('application/json')) {
                        return response.json().then(data => ({
                            type: 'json',
                            data: `<h1>JSON Response</h1><pre>${JSON.stringify(data, null, 2)}</pre>`
                        }));
                    } else {
                        return response.text().then(text => ({
                            type: 'html',
                            data: text
                        }));
                    }
                })
                .then(result => {
                    // Get the content div
                    const contentDiv = document.getElementById('content');
                    if (result.type === 'html') {
                        // For HTML, extract the content inside <div id="content">
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(result.data, 'text/html');
                        const newContent = doc.querySelector('#content');
                        if (newContent) {
                            contentDiv.innerHTML = newContent.innerHTML;
                        } else {
                            contentDiv.innerHTML = '<h1>Error</h1><p>Content not found</p>';
                        }
                    } else {
                        // For JSON, display the formatted data
                        contentDiv.innerHTML = result.data;
                    }
                    // Update the browser's URL without reloading
                    history.pushState({}, '', url);
                })
                .catch(error => {
                    console.error('Error fetching content:', error);
                    document.getElementById('content').innerHTML = '<h1>Error</h1><p>Failed to load content</p>';
                });
        });
    });
});