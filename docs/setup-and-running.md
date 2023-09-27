## Setup and Running

It is highly recommended to use a Unix-based system (such as Ubuntu, Fedora, Kali, or any other) or MacOS. Windows may encounter certain issues with Docker.

### Requirements

- Git is essential before anything else;
- [Node][1] and [TypeScript][2];
- If you are on MacOs, you can install above using [homebrew][3];
- [Docker][4]
- [pnpm][5]
- [Prisma][6]
- [PostGres][7]

### 1 - Clone the Repository

To clone the repository, follow these steps:

Open your terminal or command prompt.

Go to the file that you want to download the project (you can use the command `ls` to see where your location and the comand `cd` to go to myfiles/exemple).

Then, run the following command to clone the repository:

`git clone https://github.com/podcodar/app.git` \
This command will download the project to your local machine.

### 2 - Install Project Dependencies

To install pnpm on your system, simply run this command if node is installed. \
`npm install -g pnpm` \
For other ways to install, follow the official installation instructions for your operating system. \
[pnpm Installation][5]

Then use the commands: \
`pnpm install`
to install package.json dependencies

`pnpm run`
to run the script provided in package.json

### 3 - Install Docker

To install Docker and Docker Compose on your system, follow the official installation instructions for your operating system.\
[Docker Installation][8] \
[Docker Compose Installation][9]

Now you can run the project by typing:

```
# MacOs users
docker-compose up -d
# Linux users
docker-compose -f docker-compose.yml -f docker-compose.portforward.yml up -d
```

[Next page ➔][10]

[1]: https://nodejs.org/pt-br/download
[2]: https://www.typescriptlang.org/
[3]: https://brew.sh/
[4]: https://docs.docker.com/engine/install/
[5]: https://pnpm.io/pt/installation
[6]: https://www.prisma.io/
[7]: https://www.postgresql.org/docs/current/
[8]: https://docs.docker.com/get-docker/
[9]: https://docs.docker.com/compose/install/
[10]: using-the-app.md
