
```markdown
# Pterodactyl-Register-Discord-Bot

![Pterodactyl-Register-Discord-Bot Banner](assets/banner.png) <!-- Replace with actual image link -->

A feature-rich Discord bot to automate user registration on Pterodactyl Panel, allowing users to create accounts directly from Discord without admin permissions. This bot is ideal for gaming communities, hosting providers, and server administrators looking to streamline the account creation process for users.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **Easy Registration**: Allows users to create accounts on the Pterodactyl Panel with a single command.
- **No Admin Permissions Required**: Ensures secure registration without exposing sensitive admin controls.
- **Customizable Settings**: Configure bot behavior through environment variables.
- **Error Handling**: Provides clear feedback for invalid inputs or failed registrations.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above recommended)
- [Discord Bot Token](https://discord.com/developers/applications) for the bot
- [Pterodactyl Panel API Key](https://pterodactyl.io/administrators/1.0/application-api.html)

### Clone the Repository

```bash
git clone https://github.com/yourusername/Pterodactyl-Register-Discord-Bot.git
cd Pterodactyl-Register-Discord-Bot
```

### Install Dependencies

```bash
npm install
```

---

## Configuration

1. Create a `.env` file in the root directory and configure the following variables:

    ```plaintext
    DISCORD_TOKEN=your_discord_bot_token
    PTERODACTYL_API_KEY=your_pterodactyl_api_key
    PTERODACTYL_URL=https://your-pterodactyl-url.com/api/application
    ```

2. **Config Options in `config.js`:**

   Modify `config.js` to change bot behavior or set mock mode for testing.

   ```javascript
   module.exports = {
       discordToken: process.env.DISCORD_TOKEN,
       pterodactyl: {
           url: process.env.PTERODACTYL_URL,
           apiKey: process.env.PTERODACTYL_API_KEY,
           useMock: true // Set to `true` for testing without the real Pterodactyl API
       }
   };
   ```

---

## Usage

To start the bot:

```bash
node index.js
```

The bot will now be online and ready to accept commands in Discord.

---

## Commands

| Command                  | Description                                              | Usage Example                                              |
|--------------------------|----------------------------------------------------------|------------------------------------------------------------|
| `!create <username> <email> <first name> <last name> <password>` | Creates a new Pterodactyl user account with the provided details. | `!create testuser test@example.com John Doe password1234` |

> **Note**: Ensure users follow the exact format to avoid errors.

---

## Screenshots

### Registration Command in Action
![Registration Command](assets/registration_command.png) <!-- Replace with actual image link -->

### Success Response
![Success Response](assets/success_response.png) <!-- Replace with actual image link -->

### Error Handling
![Error Handling](assets/error_handling.png) <!-- Replace with actual image link -->

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please open issues for bug reports or feature requests, and submit pull requests for improvements.

---

## Support

For any issues or questions, please reach out through GitHub issues or join our Discord community [here](https://discord.gg/your-invite-link).

---

## Future Enhancements

- **Advanced Error Handling**: Improve feedback for common registration issues.
- **Customizable User Roles**: Allow assigning roles to users upon registration.
- **Multi-Language Support**: Add support for multiple languages in bot responses.

---

> **Disclaimer**: This bot is provided "as is" without any warranty. Use responsibly and ensure compliance with third-party API terms.

---

Thank you for using **Pterodactyl-Register-Discord-Bot**!
```

---

### Explanation of Each Section

- **Images**: Add images in an `assets` folder within the project (like `assets/banner.png`, `assets/registration_command.png`) and replace the placeholders in the README with the actual file paths.
- **Future Enhancements**: Lists possible features for contributors or future updates.
- **License**: Directs users to the MIT License.
  
This README provides comprehensive information, making it easier for new users to understand and install the bot while highlighting your bot’s main functionalities and future potential. Let me know if you'd like to expand on any part!
