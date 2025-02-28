Password Generator

This project is a password generator built with HTML, CSS, JavaScript, and Python. The password generator allows you to create secure passwords with user-customizable options like length, inclusion of uppercase letters, numbers, and special characters. It comes with both a client-side version using JavaScript (for the web) and a backend Python version for server-side generation.

Features

- Password Customization: 
  - Specify password length (default 12).
  - Choose to include uppercase letters, numbers, and special characters.
  
- Frontend: The password generator is implemented using HTML, CSS (SCSS), and JavaScript. It runs directly in the browser.

- Backend: The Python script allows generating a password server-side with similar functionality.

---

Prerequisites

- Frontend (HTML/CSS/JavaScript):
  - A modern web browser (e.g., Chrome, Firefox) to run the web-based password generator.
  
- Backend (Python):
  - Python 3.x installed on your machine for the server-side script.
  - The random and string libraries are used (both are built-in in Python, so no external libraries are required).

---

Setup and Usage
Frontend Setup (HTML/CSS/JavaScript)

1. Clone or Download this repository.
2. Open the index.html file in your browser to run the password generator.
3. You can customize the password generation:
   - Set the password length (default: 12).
   - Choose whether to include uppercase letters, numbers, and special characters.
4. Click the Generate Password button, and the generated password will appear below the input fields.

File structure:


/password-generator/
├── index.html       # Main HTML file for the password generator UI
├── styles.scss      # SCSS file for styling
├── script.js        # JavaScript file for password logic
├── styles.css       # Compiled CSS from SCSS (use if SCSS is not compiled)


Backend Setup (Python)

1. Clone or Download this repository.
2. Ensure that Python 3.x is installed on your system.
3. Open the Python script file (e.g., password_generator.py) in a Python environment or IDE (such as Visual Studio Code or PyCharm).
4. Run the script. You will be prompted to enter the parameters for the password generation, such as length and whether to include uppercase letters, numbers, or special characters.

Example Python script usage:

```python
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

Example usage:
password = generate_password(length=16, use_uppercase=True, use_numbers=True, use_special_chars=True)
print(f"Generated Password: {password}")


---

How to Compile SCSS

If you modify the SCSS file (`styles.scss`), you need to compile it into CSS. Here's how you can do it:

1. *Install Sass* (if you don't have it installed):
   bash
   npm install -g sass
   

2. *Compile the SCSS file*:
   bash
   sass styles.scss styles.css
   ```
This will compile the SCSS into a regular styles.css file, which can then be linked to the index.html file.

---

License

This project is open source and available under the [MIT License](LICENSE).

---

Acknowledgements

- Special thanks to the Python and JavaScript communities for providing resources and libraries that made this password generator possible.
- This project is a simple implementation and can be expanded with additional features such as:
  - Password strength checker
  - Option to copy the password to clipboard
  - More customizable password options

Feel free to contribute or suggest improvements!

---

Contact

For any questions or feedback, please feel free to reach out.

- Author: Your Name
- Email: your.email@example.com
- Website: [yourwebsite.com](https://www.yourwebsite.com)
```
