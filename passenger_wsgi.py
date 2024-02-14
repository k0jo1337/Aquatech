import os, sys
sys.path.insert(0, '/var/www/u2490228/data/www/anapavoda.ru/aquatech')
sys.path.insert(1, '/var/www/u2490228/data/djangoenv/lib/python3.10/site-packages/')
os.environ['DJANGO_SETTINGS_MODULE'] = 'aquatech.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
