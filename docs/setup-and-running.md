## Setup and Running

It is highly recommended to use a Unix-based system (such as Ubuntu, Fedora, Kali, or any other) or MacOS. Windows may encounter certain issues with Docker.

### Requirements

- Git is essential before anything else;
- [Node](https://nodejs.org/pt-br/download) and [TypeScript](https://www.typescriptlang.org/);
- If you are on MacOs, you can install above using [homebrew](https://brew.sh/);
- [Docker](https://docs.docker.com/engine/install/)
- [pnpm](https://pnpm.io/pt/installation)
- [Prisma](https://www.prisma.io/)
- [PostGres](https://www.postgresql.org/docs/current/)

### 1 - Clone the Repository

To clone the repository, follow these steps:

Open your terminal or command prompt.

Go to the file that you want to download the project (you can use the command `ls` to see where your location and the comand `cd` to go to myfiles/exemple).

Then, run the following command to clone the repository:

`git clone https://github.com/podcodar/app.git` \
This command will download the project to your local machine.

### 2 - Install Project Dependencies

# pnpm - TODO

### 3 - Install Docker

To install Docker and Docker Compose on your system, follow the official installation instructions for your operating system.\
[Docker Installation](https://docs.docker.com/get-docker/) \
[Docker Compose Installation](https://docs.docker.com/compose/install/) \
Now you can run the project by typing:

```
# MacOs users
docker-compose up -d
# Linux users
docker-compose -f docker-compose.yml -f docker-compose.portforward.yml up -d
```
