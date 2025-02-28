import random
import string

def generate_password(length=12, use_uppercase=True, use_numbers=True, use_special_chars=True):
    # Define character sets
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    digits = string.digits
    special_chars = string.punctuation

    # Start with lowercase letters
    characters = lowercase

    # Add uppercase letters if needed
    if use_uppercase:
        characters += uppercase

    # Add digits if needed
    if use_numbers:
        characters += digits

    # Add special characters if needed
    if use_special_chars:
        characters += special_chars

        # Generate the password by randomly selecting characters
    password = ''.join(random.choice(characters) for i in range(length))
    
    return password
