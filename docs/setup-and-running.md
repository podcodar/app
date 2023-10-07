## Setup and Running

It is highly recommended to use a Unix-based system (such as Ubuntu, Fedora, Kali, or any other) or MacOS. Windows may encounter certain issues with Docker.

### Requirements

- Git is essential before anything else;
- [Node][1] and [TypeScript][2];
- If you are on MacOs, you can install above using [homebrew][3];
- [Docker][4]
- [pnpm][5]
- [Prisma][6]
- [GPG][7]
- [PostGres][8]

## 1 - Clone the Repository

To clone the repository, follow these steps:

Open your terminal or command prompt.

Go to the file that you want to download the project (you can use the command `ls` to see where your location and the comand `cd` to go to myfiles/exemple).

Then, run the following command to clone the repository:

`git clone https://github.com/podcodar/app.git` \
This command will download the project to your local machine. ✨

## 2 - Install Project Dependencies

To install pnpm on your system, simply run this command if node is installed. \
`npm install -g pnpm` \
For other ways to install, follow the official installation instructions for your operating system. \
[pnpm Installation][5]

Then use the commands: \
`pnpm install`
to install package.json dependencies

`pnpm run`
to run the script provided in package.json

## 3 - Environment setup

We use [GPG][9] for credential managing, first make sure you have it installed on your machine and correctly set in your path (if not, follow the requirements doc :wink:).

### Generating environment variables

**Installation for GPG** \
Now install GPG:

```shell
brew install gnupg
```

**On main branch** \
Generating keys for project

```shell
pnpm decrypt
```

GPG will ask you the password, to obtain it please contact @frattezi or @marco-souza.

Now, your env files should be populated with the necessary values, cheers! 🥂

## 4 - Install Docker

To install Docker and Docker Compose on your system, follow the official installation instructions for your operating system.\
[Docker Installation][10] \
[Docker Compose Installation][11]

Now you can run the project by typing:

```
# MacOs users
docker-compose up -d

# Linux users
docker-compose -f docker-compose.yml -f docker-compose.portforward.yml up -d
```

[Next page ➔][12]

[1]: https://nodejs.org/pt-br/download
[2]: https://www.typescriptlang.org/
[3]: https://brew.sh/
[4]: https://docs.docker.com/engine/install/
[5]: https://pnpm.io/pt/installation
[6]: https://www.prisma.io/
[7]: https://www.gnupg.org/documentation/
[8]: https://www.postgresql.org/docs/current/
[9]: https://www.redhat.com/sysadmin/encryption-decryption-gpg#:~:text=The%20GNU%20Privacy%20Guard%20(GPG,services%20using%20the%20OpenPGP%20standard.)
[10]: https://docs.docker.com/get-docker/
[11]: https://docs.docker.com/compose/install/
[12]: using-the-app.md
