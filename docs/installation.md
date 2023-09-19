## Installation

### 1 - Clone the Repository

To clone the repository, follow these steps:

Open your terminal or command prompt.

Go to the file that you want to download the project (you can use the command `ls` to see where your location and the comand `cd` to go to myfiles/exemple).

Then, run the following command to clone the repository:

`git clone https://github.com/podcodar/app.git` \
This command will download the project to your local machine.

### 2 - Install Project Dependencies

To install the project's dependencies, follow these steps:

Open your terminal or command prompt.

Navigate to the folder where your project is located. You can do this by using the `cd` command followed by the folder name to enter a folder and `cd ..` to go back up one level. For example:

To enter a folder: `cd folder-name` \
To go back one level: `cd ..` \
Once you're in the project's folder, execute the following command:

`yarn`

This command will automatically download and install all the necessary dependencies for the project. Please note that you should be in the correct project folder when running this command.

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
