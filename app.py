from flask import Flask,render_template
app = Flask(__name__,template_folder='template')


@app.route('/')
def home():
    return render_template("home.html")
@app.route('/movies')
def movies():
    return render_template("movies.html")
@app.route('/series')
def series():
    return render_template("series.html")
@app.route('/animation')
def animation():
    return render_template("animation.html")

if __name__ == "__main__":
    app.run()