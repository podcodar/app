# PodCodar App

First of all, welcome!!!

## Objective

The primary goal of this project is to streamline the onboarding process for new members. In response to the challenges posed by the increasing number of newcomers, we've taken steps to implement a range of features designed to greatly enhance our capacity to warmly and efficiently welcome them.

## Requirements

- It is highly recommended to use a Unix-based system (such as Ubuntu, Fedora, Kali, or any other) or MacOS. Windows may encounter certain issues with Docker.
- Git is essential before anything else;
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable), [Node](https://nodejs.org/pt-br/download), and [TypeScript](https://www.typescriptlang.org/); 
- If you are on MacOs, you can install above using [homebrew](https://brew.sh/);
-[ Docker](https://docs.docker.com/engine/install/)

## Installation

1 - Clone the Repository

To clone the repository, follow these steps:

Open your terminal or command prompt.

Go to the file that you want to download the project. (you can use the command ls to see where your location and the comand cd to go to myfiles/exemplo)

Then, run the following command to clone the repository:

git clone https://github.com/podcodar/app.git
This command will download the project to your local machine.

2 - Install Project Dependencies

To install the project's dependencies, follow these steps:

Open your terminal or command prompt.

Navigate to the folder where your project is located. You can do this by using the cd command followed by the folder name to enter a folder and cd .. to go back up one level. For example:

To enter a folder: cd folder-name
To go back one level: cd ..
Once you're in the project's folder, execute the following command:

yarn

This command will automatically download and install all the necessary dependencies for the project. Please note that you should be in the correct project folder when running this command.

## Using the app

Before we proceed, please make sure there were no issues with the installation. If you are having any problems, please contact one of the tech leaders.

# To start the development server, run one of the following commands:

# Using npm:
npm run dev

# Using yarn:
yarn dev

# If you encounter any issues or errors during this step, here are some common troubleshooting tips:

# 1. Ensure Dependencies are Installed:
#    Make sure you've already run 'npm install' or 'yarn install' to install project dependencies. 
#    If not, run 'npm install' or 'yarn install' before running the 'dev' command.

# 2. Check Node.js and NPM/Yarn Versions:
#    Ensure that you have a compatible version of Node.js installed. You can check your Node.js version by running:
#    'node -v'
#    Additionally, verify your npm or yarn versions:
#    'npm -v' or 'yarn -v'

# 3. Verify Configuration:
#    Ensure that your project's configuration files (e.g., 'package.json') are correctly set up, including any scripts necessary for development.

# 4. Resolve Dependency Conflicts:
#    If there are dependency conflicts, resolve them based on the error messages provided. You might need to update or remove conflicting packages.

# 5. Check for Environment Variables:
#    Some projects require environment variables to be set. Check the project documentation for any specific environment variables you need to configure.

# If you've addressed these potential issues and still encounter problems, feel free to seek assistance in the project's community or support channels.

- Now we use PNPM

Com o passo anterior feito, abra o link [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Tecnologias Utilizadas

- Next JS
- Typescript
- Tailwind
- Prisma
- Jest
- Supabase

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch com a sua feature: git checkout -b my-feature
3. Faça o commit das suas alterações: `git commit -m 'fea: My new feature'`
4. Faça o push da sua branch: git push origin my-feature
5. Envie um Pull Request
