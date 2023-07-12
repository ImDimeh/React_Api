# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## explication du code 
### recuprer les données de l'api
grace au code si dessous je peux recuprer touts les produits depuis l'api .
```
var cards = [];
//http://localhost:5500/product

fetch("http://localhost:5500/product")
  .then((response) => response.json())
  .then((data) => {
    // Le contenu de la réponse est stocké dans la variable 'data'
    console.log(data);
    cards = data;
    console.log(cards);
    // Faites ici ce que vous voulez avec la réponse
  })
  .catch((error) => {
    // Gérer les erreurs
    console.error("Une erreur s'est produite:", error);
  });

```

Je peux ensuite utiliser la fonction .map() afin de generer dynamiquement les card pour tout les produits 

```{cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nom : {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Type : {card.type}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Prix : {card.price}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Évaluation : {card.rating}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Durée de garantie : {card.warranty_years} an(s)
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      variant="outlined"
                      onclick={deleteProduct(card.name)}
                      startIcon={<DeleteIcon />}
                    >
                      Supprimer
                    </Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

```

### supprimer un produits 
grace au code si dessous je peux réagir au clic sur le boutton supprimer afin d'appeler la fonction DeleteProduct avec en parametre le nom du produits a supprimer 
```
<Button
                      variant="outlined"
                      onclick={deleteProduct(card.name)}
                      startIcon={<DeleteIcon />}
                    >
                      Supprimer
                    </Button>


```

Ainsi je peux envoyer la requette a l'api afin de supprimer le produits 

```
async function deleteProduct(name) {
  try {
    const response = await fetch(
      `http://localhost:5500/delete-product?name=${name}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const deleteProductResult = await response.json();
      console.log(deleteProductResult);
      // Faites ici ce que vous voulez avec les informations de suppression du produit
    } else {
      console.error(
        "Une erreur s'est produite lors de la suppression du produit."
      );
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la suppression du produit:",
      error
    );
  }


```



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
