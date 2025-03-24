from pathlib import Path
import pymysql
import os
pymysql.install_as_MySQLdb()

BASE_DIR = Path(__file__).resolve().parent

ALLOWED_HOSTS = ['*']

ROOT_URLCONF = 'insta.urls'

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000'
]

DEBUG = True

SECRET_KEY = 'django-insecure-@4s5x_1z3x0b!k2v!_3s1w3u6&^@*!b*^=5p8_1@h^2z1k1r3s'

INSTALLED_APPS = [
    'memories',
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework_simplejwt',
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

MEDIA_URL = '/media/'  # URL prefix for media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')  # Directory where media files are stored

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

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

FILE_UPLOAD_HANDLERS = [
    'django.core.files.uploadhandler.TemporaryFileUploadHandler',  # Stream large files to disk
    'django.core.files.uploadhandler.MemoryFileUploadHandler',  # Handle small files in memory
]

# Simple JWT settings
from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),  # Access token validity
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),  # Refresh token validity
}

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / '..' / 'static']

# Increase the maximum size for in-memory file uploads (default is 2.5 MB)
DATA_UPLOAD_MAX_MEMORY_SIZE = 100 * 1024 * 1024  # 100 MB

# Increase the maximum size for file uploads (default is 2.5 MB)
FILE_UPLOAD_MAX_MEMORY_SIZE = 100 * 1024 * 1024  # 100 MB