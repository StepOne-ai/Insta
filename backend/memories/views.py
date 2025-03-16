from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm

def base(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index.html')


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login(request):
    return render(request, 'login.html')

def create_post(request):
    return render(request, 'create_post.html')

def password_reset(request):
    return render(request, 'password_reset.html')