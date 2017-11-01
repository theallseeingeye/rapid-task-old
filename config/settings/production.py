"""
These are the settings we use for production servers


We should consider these following settings before launching into production:
    DEBUG_PROPAGATE_EXCEPTIONS = FALSE
    Email SSL
        -EMAIL_USE_TLS
        -EMAIL_USE_SSL
        -EMAIL_SSL_CERTFILE
        -EMAIL_SSL_KEYFILE
        For further documentation: https://docs.djangoproject.com/en/1.11/ref/settings/#email-use-tls
    MIDDLEWARE_CLASSES - Add them
    SECURE_CONTENT_TYPE_NOSNIFF = TRUE
    SECURE_PROXY_SSL_HEADER
    SECURE_SSL_HOST = TRUE
    SESSION_SERIALIZER
"""

# Carry forward settings from base
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# If this is not correctly set, it can spit back 500 errors. Keep this restrictive for security measures.
ALLOWED_HOSTS = [
    '.rapidtask.com',
    '.rapidtask.ca',
]

# Forces the use of cookies over HTTPS
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

