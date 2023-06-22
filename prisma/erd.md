```mermaid
erDiagram

        Roles {
            USER USER
ADMIN ADMIN
        }
    
  "User" {
    Int id "🗝️"
    String name 
    String email 
    String username 
    String avatar 
    Roles roles 
    }
  

  "Task" {
    Int id "🗝️"
    String title 
    String description 
    }
  

  "UserTasks" {
    Boolean completed 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "TasksDependencies" {

    }
  
    "User" o|--}o "Roles" : "enum:roles"
    "User" o{--}o "UserTasks" : "tasks"
    "Task" o{--}o "UserTasks" : "users"
    "Task" o{--}o "TasksDependencies" : "followUp"
    "Task" o{--}o "TasksDependencies" : "dependsOn"
    "UserTasks" o|--|| "User" : "user"
    "UserTasks" o|--|| "Task" : "Task"
    "TasksDependencies" o|--|| "Task" : "task"
    "TasksDependencies" o|--|| "Task" : "dependentTask"
```
