# Generated by Django 4.0.8 on 2023-01-14 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_remove_customuser_categories'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='last_name',
        ),
    ]