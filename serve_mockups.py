import http.server
import socketserver
import os

PORT = 8080
# The script is in music-theory-app, and we want to serve the ui-recommendations directory
# which is also in music-theory-app.
# The CWD will be the project root /home/benweitzer/music-theory/
# So we need to change to the music-theory-app directory first.
os.chdir('music-theory-app')
DIRECTORY = "ui-recommendations"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
