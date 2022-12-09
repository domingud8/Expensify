import os
from .base import *
from dotenv import load_dotenv

load_dotenv(dotenv_path=BASE_DIR / ".env.local", verbose=True)

CORS_ALLOW_ALL_ORIGINS = True

DATABASES = {
     "default": {
       "ENGINE":  "django.db.backends.postgresql",
       "NAME": os.getenv("DB_NAME","postgres"),
       "USER": os.getenv("DB_USER","postgres"),
       "PASSWORD": os.getenv("DB_PASSWORD", "postgres"),
       "HOST": os.getenv("DB_HOST", "127.0.0.1"),
       "PORT": os.getenv("DB_PORT", "5432"),
     }
 }