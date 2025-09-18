import http.server
import socketserver
import os

PORT = 8080
# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))
DIRECTORY = os.path.join(script_dir, "ui-recommendations")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
