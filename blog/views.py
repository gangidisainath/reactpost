from django.http import JsonResponse,HttpResponse
from .models import blogpost,blogacc
from .serializers import blogpostserializer,blogaccserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import MultiPartParser,FormParser
from django.contrib.auth import login,authenticate,logout
from django.contrib.auth.hashers import make_password,check_password
import json
from django.views.generic import TemplateView

class ReactAppView(TemplateView):
   template_name='index.html'
@api_view(['POST'])
def register(request):
   d=json.loads(request.body)
   uname=d.get('uname')
   upass=d.get('upass')
   upass1=d.get('upass1')
   if blogacc.objects.filter(username=uname).exists():
      return Response({'msg':'username already exist'})
   if upass1==upass:
    acc=blogaccserializer(data={'username':uname,'password':make_password(upass)})
    if acc.is_valid():
     acc.save()
     return Response({'msg':"registered"})
    
   return Response({'msg':"password doesnot match"})
@api_view(['POST'])
def Login(request):
   d=json.loads(request.body)
   uname=d.get('uname')
   upass=d.get('upass')
   user=blogacc.objects.filter(username=uname)
   if not user:
   
      return Response({'msg':'username doesnot exist'})
   
   user=authenticate(username=uname,password=upass)
   
   if user:
      login(request,user)
      return Response({'msg':'success'})
   else:
      return Response({'msg':'wrong password'})
@api_view(['POST'])
def deleteacc(request):
   d=request.data
   acc=blogacc.objects.filter(username=request.data['username'])
   if acc:
    acc[0].delete()
   return HttpResponse("account deleted")
@api_view(['GET'])
def get_posts(request):
    uname=request.GET.get('username')
    user=blogacc.objects.get(username=uname)
    posts=blogpost.objects.filter(username=uname)
    serializer=blogpostserializer(posts,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_post(request):
    id=request.GET.get('id')
    post=blogpost.objects.get(id=id)
    serializer=blogpostserializer(post)
    print(post)
    return Response(serializer.data)
@api_view(['POST'])
def create_post(request):
   d=request.data
   d['username']=blogacc.objects.get(username=d['username'])
   a=blogpostserializer(data=d)
   if a.is_valid():
      a.save()
      return HttpResponse("success")
   else:
      return HttpResponse(a.errors)

   
@api_view(['DELETE'])
def delete_post(request):
    try:
     post=blogpost.objects.get(id=request.GET.get('id'))
     post.delete()
     return Response({"msg":"successfully deleted"})
    except blogpost.DoesNotExist:
     return Response({"msg":"error"})
@api_view(['DELETE'])
def deleteall(request):
    try:
     posts=blogpost.objects.filter(username=request.GET.get('username'))
     posts.delete()
     return Response({"msg":"successfully deleted"})
    except blogpost.DoesNotExist:
     return Response({"msg":"error"})


