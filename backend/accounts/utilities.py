from faker import Faker

fake = Faker()

def make_random_username():
    return fake.user_name()