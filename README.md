# Maxi-Ms Frontend Technical Test

Prueba técnica de front en donde se muestran 3 pantallas:

- Home
- Series
- Movies

## 💻 Instalación de dependencias

Para este proyecto se empleo Node en su versión `18.17.0`.

Para instalar las dependencias utiliza el comando

```bash
npm install
```

## 🚀 Ejecución del proyecto

Para ejecutar este proyecto primero iniciamos JSON Server con el comando:

```bash
npx json-server --port 4000 db.json
```

En otra terminal ejecutamos el siguiente comando para iniciar nuestra aplicación:

```bash
npm start
```

Para correr los test empleamos el comando:

```bash
npm test
```

## Preguntas

1. ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

- JSON Server: decidí usar esta dependencia para simular como podría ser las peticiones a una API real, me parece una herramienta práctica para interactuar con mocks de data. De esta forma considero que se puede simular mejor como es que se construyen los endpoints y la data que se envía en las peticiones a los servicios.

- Componentes reutilizables: decidí crear componentes que pudieran ser reutilizados con facilidad, entre ellos están los componentes `Layout`, `Navbar`, `Footer`, `HeaderTitle` esto con la finalidad de no repetir código y poder editarlos y mantenerlos con mayor facilidad.

- Tailwind CSS y Styled components: decidí usar estas librerías de estilos porque considero que pueden complementarse de buena manera, por una parte styled components nos permite crear componentes que son reutilizables y por otra parte Tailwind nos ofrece un conjunto de utilidades de estilo que pueden aplicarse de manera rápida. Considero que cuando tenemos un sistema de diseño grande y definido esta combinación puede ser escalable manteniendo la legibilidad del código.

- Redux toolkit: decidí utilizar esta librería porque me parece que permite una estructura de archivos intuitiva y clara. Decidí crear 3 reducers: uno para las series, otro para las películas y otro para el modal que muestra el detalle de las dos anteriores. Con esta elección puedo acceder a los datos que necesito en las distintas pantallas de manera rápida.
  También algo que elegí usar fueron los Async Thunks ya que quise mantener las llamadas a la "api" en los mismos reducers, considero que de esta manera es más claro lo que sucede.

2. ¿Hay alguna mejora que pueda hacer en su envío?
   Sí, considero que un área de mejora en este proyecto es la parte de los test, creo que es un área de oportunidad en mi formación profesional y considero que aún se pueden agregar casos que validen por completo el comportamiento de los componentes.

3. ¿Qué haría de manera diferente si se le asignara más tiempo?

- Mejoraría el aspecto visual para construir un diseño más presentable y con una cohesión de estilos y colores.
- Trabajar de mejor forma los styled components para construir componentes reutilizables más eficientes.
- Construiría más pruebas unitarias.
