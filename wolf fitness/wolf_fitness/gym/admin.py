from django.contrib import admin
from .models import Contact, Member, MembershipPlan, Progress

admin.site.register(Contact)
admin.site.register(Member)
admin.site.register(MembershipPlan)
admin.site.register(Progress)