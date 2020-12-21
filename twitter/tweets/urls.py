from rest_framework import routers
from .api import TweetViewSet

router = routers.DefaultRouter()

router.register('api/tweets', TweetViewSet, 'tweets')

urlpatterns = router.urls