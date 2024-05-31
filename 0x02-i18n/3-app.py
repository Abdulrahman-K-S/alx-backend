#!/usr/bin/env python3
"""
Task 3. Parametrize templates
"""

from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config:
    """Config

    This class will contain the languages that will be
    present in the website.
    """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


@app.route('/')
def index():
    """index

    This method returns a route to 0-index.html

    Return:
        (str): The route of the GET method.
    """
    return render_template('3-index.html')


@babel.locale_selector
def get_locale():
    """get_locale

    This method determines the best match with our supported languages
    that we offer in Config class.
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == '__main__':
    app.config.from_object('3-app.Config')
    app.run(host='0.0.0.0', port='5000')
