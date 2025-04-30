# Rose Markets LLC Landing Page

This is the official landing page for Rose Markets LLC, hosted at [rosemarkets.org](https://rosemarkets.org). The project is built as a serverless application deployed on Netlify, featuring email functionality powered by Nodemailer.

## Project Overview

- **Domain**: rosemarkets.org
- **Hosting**: Netlify
- **Email Service**: Nodemailer
- **Architecture**: Serverless Functions

## Features

- Modern, responsive landing page
- Serverless email functionality
- Contact form integration
- Netlify deployment and hosting

## Technical Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js
- **Email Service**: Nodemailer
- **Hosting**: Netlify
- **Serverless Functions**: Netlify Functions

## Project Structure

```
├── public/          # Static assets and frontend files
├── netlify/         # Netlify configuration and functions
├── backend/         # Server-side code and email functionality
├── package.json     # Project dependencies
└── netlify.toml     # Netlify configuration
```

## Development

### Prerequisites

- Node.js
- Netlify CLI (optional, for local development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

To run the project locally:

```bash
netlify dev
```

## Deployment

The project is automatically deployed to Netlify when changes are pushed to the main branch. The deployment process is handled through Netlify's continuous deployment pipeline.

## Environment Variables

The following environment variables are required for the email functionality:

- `EMAIL_USER`: Email account username
- `EMAIL_PASS`: Email account password
- `EMAIL_TO`: Recipient email address

These should be configured in your Netlify environment settings.

## License

This project is licensed under the ISC License.

## Contact

For any inquiries, please contact Castle Ford.
