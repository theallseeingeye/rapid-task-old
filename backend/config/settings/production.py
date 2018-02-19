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

from .base import *

# Carry forward settings from base


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# If this is not correctly set, it can spit back 500 errors. Keep this restrictive for security measures.
ALLOWED_HOSTS = [
    '.rapidtask.com',
]

CORS_ORIGIN_WHITELIST = (
    'www.rapidtask.com',
    'rapidtask.com'
)

# Forces the use of cookies over HTTPS
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# This prevents access to the stored data from JavaScript
SESSION_COOKIE_HTTPONLY = True

# Django honeypot admin page settings
# This will send any logged attempts to the /admin page to all the administrator's emails.
ADMIN_HONEYPOT_EMAIL_ADMIN = True

# Django email settings
# Note: This will need to be changed for production setting using a different email service.
# Google is not a transactional email service and not made for web applications.
EMAIL_BACKEND = 'django.cor.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'pass'
EMAIL_PORT = 555
EMAIL_HOST_USER = 'email@email.com'
EMAIL_HOST_PASSWORD = get_secret('EMAIL_PASSWORD')
EMAIL_USE_TLS = True
EMAIL_USE_SSL = True
EMAIL_SSL_CERTFILE = None
EMAIL_SSL_KEYFILE = None
EMAIL_TIMEOUT = None
