from django.db import models


# =========================
# CONTACT FORM MODEL
# =========================
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# =========================
# REGISTER MODEL
# =========================
class Member(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# =========================
# MEMBERSHIP PLANS
# =========================
class MembershipPlan(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()

    def __str__(self):
        return self.name


# =========================
# USER PROGRESS DASHBOARD
# =========================
class Progress(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    workouts_done = models.IntegerField(default=0)
    calories_burned = models.IntegerField(default=0)
    workout_hours = models.FloatField(default=0.0)
    streak_days = models.IntegerField(default=0)

    strength = models.IntegerField(default=0)
    cardio = models.IntegerField(default=0)
    diet = models.IntegerField(default=0)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.member.name