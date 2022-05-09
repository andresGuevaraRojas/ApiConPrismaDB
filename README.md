# Api: Express con Prisma DB

Api que expone enpoints para hacer operaciones CRUD sobre el recurso explorers. Se utilizó express como servidor, Postgres Sql como motor de base de datos y PrismaDB como ORM.

```mermaid
stateDiagram-v2

PostgresSql --> Prisma
Prisma --> Express

```

## Modelos

```mermaid
classDiagram
class Explorer{
    Int id
    String name
    String username
    String mission
    String azureCertification
    Date dateCreated
    Date lastUpdated
}

class Course{
    Int id
    String name
    String lang
    Int enrollments
    Boolean hasCertification
    Date dateCreated
    Date lastUpdated
}
```

## Explorers Endpoints

### Todos los explorers

> GET /explorers

![Obtener todos los explores](/images/getAllExplorers.PNG)

### Obtener explorer por su id

> GET /explorers/:id

![Obtener explorer por id](/images/GetExplorerById.PNG)

### Crear un nuevo explorer

> POST /explorers

![Crear explorer](/images/CrearExplorer.PNG)

### Actualizar información de un explorer

> PUT /explorers/:id

![Actualizar explorer](/images/ActualizarExplorer.PNG)

### Eliminar un explorer

> DELETE /explorers/:id

![Eliminar explorer](/images/EliminarExplorer.PNG)

## Courses Endpoints

### Todos los cursos

> GET /courses

![Obtener todos los cursos](/images/GetAllCourses.PNG)

### Obtener curso por su id

> GET /courses/:id

![Obtener curso por su id](/images/GetCourseById.PNG)


### Crear un nuevo curso

> POST /courses/

![Crear curso](/images/CreateCourse.PNG)

### Actualizar información de un curso

> PUT /courses/:id

![Actualiza curso](/images/UpdateCourse.PNG)

### Eliminar un curso

> DELETE /courses/:id

![Eliminar curso](/images/EliminarCurso.PNG)