from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.views.generic import TemplateView


def index(request):
    return render(request, 'main_page/main.html')


class AppealTemplateView(TemplateView):

    def post(self, request, *args, **kwargs):
        email = request.POST.get('email')
        user_name = request.POST.get('user_name')
        phone = request.POST.get('phone')

        message = render_to_string('main/email/requests_email_send.html', {
            'email': email,
            'user_name': user_name,
            'phone': phone,
        })

        send = EmailMessage(subject=user_name, body=message, from_email='sashas42748@gmail.com',
                            to=['sashas42748@gmail.com'])
        send.send(fail_silently=False)

        return render(request, 'main_page/main.html')

    def get(self, request, *args, **kwargs):
        url = kwargs.get('url')
        return self.render_to_response(self.get_context_data(url=url))



