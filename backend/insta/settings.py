from pathlib import Path
import pymysql
pymysql.install_as_MySQLdb()

BASE_DIR = Path(__file__).resolve().parent

ALLOWED_HOSTS = ['*']

ROOT_URLCONF = 'insta.urls'

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000/'
]

DEBUG = True

SECRET_KEY = 'django-insecure-@4s5x_1z3x0b!k2v!_3s1w3u6&^@*!b*^=5p8_1@h^2z1k1r3s'

INSTALLED_APPS = [
    'memories',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_extensions',
    'django_bootstrap5',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / '..' / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'instadb',
        'USER': 'admin',
        'PASSWORD': 'Admin1234',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / '..' / 'static'] 