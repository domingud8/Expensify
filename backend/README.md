## Backend

This a simple skeleton for the django + postgresql backend of the app. For local development, make sure that you have the postgresql libraries installed (cf. `src/DOCKERFILE`), otherwise pip will fail.

### Settings
In the settings folder `src/<project_name>/settings` you can adjust the different configurations for each of the enviorments (local, test, production). The settings configured in `base.py` are global, i.e. they are imported in all three environments.
